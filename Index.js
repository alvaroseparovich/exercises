const { writeFileSync, readFileSync, readdirSync, mkdirSync } = require('fs')
const markdownIt = require('markdown-it')
const markdown = markdownIt({ html: true });
const htmlTemplate = readFileSync('./template-md.html')

function createTheEmbeds(markDownFileString){
  const sessions = splitInSessions(markDownFileString)
  const embedSessions = sessions.map(session => embedSession(session))
  return embedSessions.join('')
}

function splitInSessions (string) {
  return string.split('##').map((value, index) => index === 0 ? value : ('\n##' + value) )
}

function embedSession (string) {
  const embed1 = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/'
  const embed2 = '?utm_source=generator" width="300" height="200" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>\n'
  const splited = string.split('[')
  const arrayEmbeded = splited.map(line => {
    if (!line.includes('https://open.spotify.com/album/')) return line
    const albumId = line.split('https://open.spotify.com/album/')[1].split('?')[0]
    return embed1 + albumId + embed2
  })
  return arrayEmbeded.join('')
}

async function run () {
  const path = './Catalogs'
  const folders = readdirSync(path)
  for (const folder of folders) {
    const files = readdirSync(`${path}/${folder}`)
    files.map(filePath => {
      const fileString = readFileSync(`${path}/${folder}/${filePath}`).toString()
      try{mkdirSync(`./Parsed/${folder}`)}catch(e){}
      const markDownEmbeded = createTheEmbeds(fileString)
      writeFileSync(`./Parsed/${folder}/${filePath}` , markDownEmbeded)
      const rendered = markdown.render(markDownEmbeded)
      try{mkdirSync(`./Out/${folder}`)}catch(e){}
      writeFileSync(`./Out/${folder}/${filePath.split('.md')[0]}.html` , `${htmlTemplate} \n ${rendered}`)
      throw new Error('aa')
    })
  }
}

run()
