const { writeFileSync, readFileSync, readdirSync } = require('fs')

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
  const embed2 = '?utm_source=generator" width="300" height="200" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
  const splited = string.split('[')
  const arrayEmbeded = splited.map(line => {
    if (!line.includes('https://open.spotify.com/album/')) return line
    const albumId = line.split('https://open.spotify.com/album/')[1].split('?')[0]
    return embed1 + albumId + embed2
  })
  return arrayEmbeded.join('')
}

function run () {
  const path = './Catalogs'
  const files = readdirSync(path)
  files.map(filePath => {
    const fileString = readFileSync(path + '/' + filePath).toString()
    writeFileSync('./Parsed' + '/' + filePath, createTheEmbeds(fileString))
  })
}

run()
const file = `
# Brutals
Lista feita em 2022

-------------

# Honorables (Ones of the bests that no one knows)
## The Burial
[In the Talking of Flesh](https://open.spotify.com/album/1RPTTY81E7tdOsfcCKEWpl?si=Q9TYXmvQTT6P_IZmDXPErA)
[Ligths and Perfections](https://open.spotify.com/album/6P4jXEx6K3G1nyr6A1QJ9H?si=4i2laR1PTl-h9Nat-Z440g)
## Cognizance
[Illusory](https://open.spotify.com/album/2WESWxYBdVAU6aJ3aV4llp?si=7fwlyA4XTs6HfizzuDsM8w)
[Inquisition](https://open.spotify.com/album/2HHzSpN9Z2SbGpkKYSDMwg?si=DlwOzaUTSu6VkxkyTKcqIA)
[Upheaval](https://open.spotify.com/album/583WgFUtlLRVSvVqRf683i?si=xX-s_wDhR4mAKnTqLqx0pg)
[Malignant Dominion](https://open.spotify.com/album/791vCXWYa1kfnQsBfmb1BK?si=KhLp6tYLTsiGQZsQ6f_pdw)
## Ordinance
[The idles of March](https://open.spotify.com/album/0zUDGlW9g4HFNt7WRQCmmH?si=KTGiTIGHRgGdgNVBdqzwKg)
[Internal Monologues](https://open.spotify.com/album/5cbiITedtSf1rInb3vt9Px?si=6lSedrw9TnGyAP4QNeNjQQ)
## As Blod Runs Black
[instinct](https://open.spotify.com/album/5kVyyCdafPVhCVlYBmuDCy?si=K-hRqxkvTi-OIrZ7jRpAYg)
[Allegiance](https://open.spotify.com/album/0BA6LZvStojWEKTj1T5MSI?si=-X07Q2e0R8q3WTRrXW9BUw)
## Sumatra
[Heliocratic Infinity](https://open.spotify.com/album/4EzLwnEM3WBmjv6tGCXw2w?si=ww7YEX3SSpSnd0CeARhQ-g)
## Flesh killer
[Awaken](https://open.spotify.com/album/7plbIJHcUfzPmkah4AjOYU?si=6ogGbneFSimwl6EVR2UTtQ)
## With faith or flames
[A Conquest Triumphant](https://open.spotify.com/album/5budoxLrUIxAwU4HAg87gj?si=BxM3txiuQx-CmFzSHxmi9g)

--------

# Sounds Nice and Brutal
## Jinjer
[Wallflowers](https://open.spotify.com/album/3LEftQAmoSdbX1hXvA7rMT?si=bjQUb5lhQa-jK3Un5OJccQ)
[Micro](https://open.spotify.com/album/78FHhcWpJO7CGHUGhSCXVT?si=RGE3zZwYROS4pdYn1jW64w)
[Macro](https://open.spotify.com/album/4cTjPXaFkUyaHr29G1PiT9?si=iBEvYZKsSsiLHf4qtHSRAA)
## Sepultura
[Quadra](https://open.spotify.com/album/1OyRMXY6FZ4cUTTdzCBPSh?si=HHzAdCQxSlON-Iq8mGxcOw)
## August Burns Red
[Levler](https://open.spotify.com/album/6q5D3ge2Dtf9RNMyXOr90V?si=BS8yxEXBSQiqmoT-CzJ5sg)
[Rescue & Restore](https://open.spotify.com/album/6cIQFY2BILI2VL264yfv89?si=nCBBAvDnSwabbBFL4bRtuQ)
[Found in Far Away Places](https://open.spotify.com/album/46uMdmTIh7xBxLJrFcFTbL?si=OdC6589iQUi9wqy_1VYTSw)
[Thrill Seeker](https://open.spotify.com/album/0FaNqjJW9caK3yE5ehxRFx?si=xBICPI70QxWIOUfh5EshmQ)
[Phantom Anthem](https://open.spotify.com/album/5raPbxzLIp6YJTN5jyyT2f?si=BxgXqe0hQ3ePp_SX5U_ulA)
[Guardians](https://open.spotify.com/album/3KJ44LRyBaBsZi2eW79pCV?si=3Yo8n9ZrQ56CCRMHhZCwCQ)
[Constelations](https://open.spotify.com/album/7t94KnkOGTk1F2ZtJTqh9F?si=G8GPRz6aR2q4h_Ri4i1Ntg)
[Messagers](https://open.spotify.com/album/3FeB3V9BG5TQKF2ymlYsS6?si=R5sfz7Z7Rx-s9HCBWJn62A)


<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/1OyRMXY6FZ4cUTTdzCBPSh?utm_source=generator" width="300" height="200" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>

------

# DJent
## Animals as Leaders
[The Joy of Motion](https://open.spotify.com/album/3BfAgyF1AdYKaOO7EBoDw4?si=jGbw8FlvQLGCru2GE2vvSg)
[Encore](https://open.spotify.com/album/5hVRBZCUCcU3UIhxNikyhf?si=PoUuOIurT1WrK4rAReH4Fg)
[the Madness of Many](https://open.spotify.com/album/13jTvLPx2N9JbLOmq4yYQW?si=kQzsYvOyQNuqiVusVnq-5g)
## Periphery
[IV: Hail Stan](https://open.spotify.com/album/1seeMmdvQUplCh1cTRbWJx?si=gAgUu_rNR3mEUM0dGsYU7g)
[Periphery](https://open.spotify.com/album/37W4LjkJIxVVsYhwDfNzGz?si=HjIx7-8BRVSz8h1IhJgMNQ)


# Death Core
## Thy Art is Murder
[Hate](https://open.spotify.com/album/1n3MBUKni0VloPhNhZPMZg?si=MBpPQg_ISJyuCD9xwFL0fQ)
[Human Target](https://open.spotify.com/album/45oaK6XdF8aZ9tIF6aPQCM?si=t7vGhSgPT5W7-YDWGs-b4g)
[Dear Desolation](https://open.spotify.com/album/6gZ3FvJSTtZxX6Z9AammGW?si=EuuZlbZyRlaS2DO3bzzpQQ)
[Holy War](https://open.spotify.com/album/15MiGHqXyhVY6IkJAagrpN?si=4NOATz9SQqm59q_aDiZxzw)
## Black Dahlia Murder
[Verminous](https://open.spotify.com/album/3lGUiDSMpXjccoYh2B6i71?si=MN5_0vtASpqIhiaXsNEt3A)
[Nocturnal](https://open.spotify.com/album/5ls56sziRLk01UpqwT8d97?si=p6tn8jqsTJWIqOlSTU-LXA)
[EverBlack](https://open.spotify.com/album/1jvygHaua0G6SOLKukqo91?si=n9Y62RoNQNqT-Ukk88vGpg)
[NigthBringers](https://open.spotify.com/album/3M9PaUc9DND0HiziKbnedS?si=JRdCIckrSBG1bHiGMOYs2Q)
[Abysmal](https://open.spotify.com/album/3rBkOpu2beg895WMuo5n0W?si=aBO0d1rzTgux42n1ScTIgg)
[Ritual](https://open.spotify.com/album/787iiwJUZgZLZzRIZWzNeK?si=wGaxWe-kQnu0K0ofE3hAFw)
[Deflorate](https://open.spotify.com/album/4j5M1f9O1vN42Ep4jkK0IW?si=VxUcmuGLSuWau0Zomj31-w)
## Whitechapel
[whiteChapel](https://open.spotify.com/album/3dl2LnN3F3sh6mnspmDc5w?si=kFHZtglbTTy4yd8oX4sFOw)
[Our Endles War](https://open.spotify.com/album/4ldi4wEpZSlSw9DGE2Sx85?si=tV--Lua1Tma2--HPoGz29g)
[New Era of Corruption](https://open.spotify.com/album/7HpJb1qC68Xvy6t0YXWHib?si=ZGmNvwjbRhqUPvbLbhzPvA)
[This is Exile](https://open.spotify.com/album/6X60vgsQqS6eLifOzyJkiJ?si=HJJNKuuKQvef60itAMtR1g)
## Wind Of Plague
[Decimate the Weak](https://open.spotify.com/album/49WqfwK15hYplA2BGXwFHq?si=aRZoRSC4QGa_-M7yQ9fYMQ)
[The Great Stone War](https://open.spotify.com/album/7f9wGyx646nzqADDJZl7jD?si=IbeptK_ETlqI7c8kRT6SCw)
[Against the World](https://open.spotify.com/album/1Jmiiqpyg5sS99KxwV0Smg?si=iV2N_lJuR9GrtXFQUks2cA)
## Fit for an autopsy

--------

# Tecnical Death Core
## The Faceless
[Planetary Duality](https://open.spotify.com/album/2Ba27h8snSUMJDvdzOlDKQ?si=nTG6-eX_T4iNz3PVzFpYMA)
[Autotheism](https://open.spotify.com/album/5ULYhovm1XwFpAgyPyeWhq?si=XXOH4EGuSmSxcEkEjdFLVw)
[In Becoming a Ghost](https://open.spotify.com/album/31llYMlEIsKZWNgmIpcXPm?si=Z1zLwgRXQaa3OEUAS2vVog)
## Obscura
[Diluvium](https://open.spotify.com/album/22aOHbzooK2pUGuKvsSU6w?si=9fIZ1PQwSMOCz_h5eLgDmg)
[Akróasis](https://open.spotify.com/album/00UbYNcKS2BGljOkV49uHD?si=nbPyoAKTTKm9Ed9Cfu_uHw)
[A Velediction](https://open.spotify.com/album/0i7ZHuCCPBo6CfV54I7IxO?si=dd5r7MRlQm6pHaoL9uI5KQ)
## Within the ruins
[Black Heart](https://open.spotify.com/album/78J2WyAF3Updccv9cQEcnc?si=IbvCAg9UQuG3mQsz_9qd1Q)
[HalfWay Human](https://open.spotify.com/album/5OAtHc6zVRWzlxNhSWlxR4?si=6vxHVW6wSeie-pFVz8yg_A)
[Phenomena](https://open.spotify.com/album/139regrgNHl0bCP1L9qS20?si=DX6mmGJZRTSWASsfOI4tOg)
[Elite](https://open.spotify.com/album/4UdGAVN3f2v3L59K1eDcvY?si=_lMxXy1MS92AOvqeOE1SJQ)
## Revocation
[The Outer One](https://open.spotify.com/album/1Ela7sSi5MIp9HmEuLbCdY?si=dRzYJPs9S-KV8It3dW4jvw)
[Great is our sin](https://open.spotify.com/album/0Qz9E3OOpPafuf05Jbc9mx?si=2iEjnCjPRN2xu0bBC3ib4A)
[Deathless](https://open.spotify.com/album/2p7uFGCufEFZmeIlpeP8yg?si=HwhC17-ZREWSpdTZUwSWtA)
## Hangar
[the Reason of your conviction](https://open.spotify.com/album/05ALeeN13FUlsq2BNRh55g?si=Hhzoq26tRj-oxeImu8AKJg)
## Job for a Cowboy
[Sun Eater](https://open.spotify.com/album/0BCYrjKNyjIBRuH0nPcToQ?si=FwUsnIljS-2NpoSkGIFsrA)
[Demonocracy](https://open.spotify.com/album/3uz3sQTOLwjGBOEtoOQFct?si=fi3wx0GjTOuGYvY-ogEcFA)

--------

# Metal Core
## Chelsea Grin
[Eternal Nigthmare](https://open.spotify.com/album/1X7bJOzXV0AmdEpsk6rr5L?si=KbfcnTjBT3-YvPQHkrkQ7Q)
[Self Inflicted](https://open.spotify.com/album/0vNamFiktsR1T3nQxC7C2j?si=rBWkmPWjTRmBAvTHXbzHIg)
[Ashes to Ashes](https://open.spotify.com/album/79zgK4wGsCT3O8m6sv0r1r?si=jtJkwFxjTfmGKDmmVz1k4Q)
[My Damnation](https://open.spotify.com/album/3JBTmD1pw4kZN9tdYnaXII?si=nFWtassySPOQ7cYJbtSbsQ)
[Evolve](https://open.spotify.com/album/1Q3TPbzeIDoa4gFhXZQJkn?si=STTWMf2ARoOEZKwPnsO4YA)
## As I Lay Dying
[The powerless rise](https://open.spotify.com/album/4vJxMmzmQsm0lvVo8QF6Lk?si=zFBfUXJBT16vIGORgR_mog)
[An Ocean Betwen Us](https://open.spotify.com/album/2hghqPOGmfBdEfWeMsQWdN?si=Nf2C4mLAQeu7g0Bm5pJNGQ)
[Shadows are Security](https://open.spotify.com/album/3D8V1PlxgpX05jyHLv6e4P?si=cZ4h9mxNSrCTVi0GcyPtqw)
## Born of Osiris
[The discovery](https://open.spotify.com/album/3jP8ic7uD7ItxhAwjT6Dxh?si=QNsh8s3aTdGwPZj7eI1Tjg)
[Tomorrow We Die Alive](https://open.spotify.com/album/5ttebRYn0OFb5dnmCythXf?si=WPYT_D3yQVqWfmvjcut0mQ)
[Soul Sphere](https://open.spotify.com/album/22hyIBLgbQDGDmj4V46WAQ?si=pYoxllweR8SNqnoIx77fww)
[The Eternal Regin](https://open.spotify.com/album/6I9rxohdKInov3F52qTlV2?si=q_e_teuaRvSvgJrkB_2Wzg)
## After the Burial
[Evergreen](https://open.spotify.com/album/5TYkzohGue5TQbhIk2T8xH?si=hjBTFXfmQtO9NZwJKVDs5Q)
[Dig Deep](https://open.spotify.com/album/7ABqA1tuH6eonHAIBaBqHe?si=sfrqdnFHTR-sJoQDk5pCGg)
## The Deviel Wears Prada
[Zombie Ep](https://open.spotify.com/album/0EOelfKQ1lEEXleF1czql3?si=Nx0SuyJsTU-Ve3Ot0janBA)
[Death Throne](https://open.spotify.com/album/4aJCOyKPoo44BNCMbA5bP2?si=UmdoPDs-RhWDfSmHE9SIDQ)
[With roots above and ashes below](https://open.spotify.com/album/3fF0DMCLemCIxQ09OpSq2Y?si=zEMpzIeNQy-D3BR7lMVKIg)
[8:18](https://open.spotify.com/album/4LCYe1Ummf9H2qRRcsH9qj?si=YnjpPayLTNG-hEBo-PXe3A)

-------

# Speed
## Havock
[Point of No Return](https://open.spotify.com/album/6diYp1uiFuHfCbbapfIC6y?si=M0KP6ZlASMGvZR-QqgjrBA)
[V](https://open.spotify.com/album/0Fkj9N2dzhtukOFYnauPO0?si=IpFjZWC5SPGpnkUDdQIfgw)
[Time Is Up](https://open.spotify.com/album/7275posUjEJ7H9tLyaxyLH?si=0NHDY1qNTW261aHwnLVgsA)
[Unnatural Selection](https://open.spotify.com/album/0Ap5tnuaCCiRCPl2hBziW1?si=rSQtQ4jIRm23t84KXKuAlA)
[Conformicide](https://open.spotify.com/album/6GI3M1qTLgDNNcZCTzgWEQ?si=6vGDVqQMTSyDwn3NW7ZeEg)
## Gama Bomb
[Untouchable Glory](https://open.spotify.com/album/4KHhqOCvMaJ7x3QYQBGRFr?si=aLxhYvofS8mKKaOf84kgEw)
[Speed betwen the lines](https://open.spotify.com/album/3Ti0nXYU3jdrWkIV8gxpaA?si=ynvlNd-iTk6l0VI9aeDY1Q)
[The Terror Tapes](https://open.spotify.com/album/43sKPeZLA4xRPtUpxGzhed?si=z9ZRa9-AQ5aXU0n8gZzN1g)

-------

# Brutal Melody
## Fractal Universe
[The Impassable Horizon](https://open.spotify.com/album/4khVwXRmtXoWxDyFjCvY3d?si=8k0rOtbDREe4WORdpNnJ6g)
## Alluvial
[Sarcoma](https://open.spotify.com/album/0zIDNLYLRonkeRTckPSNif?si=q6plJJbESNiPCEPNiSvzhg)
## Beyond Creation
[The Aura](https://open.spotify.com/album/0ZE7T6uVmB8RfikstJ4w99?si=h9HwYBGKSgKhv3UHnoQSSg)
[The Earth Evolution](https://open.spotify.com/album/66llewXGhBEb4282lZfJ0s?si=5Y1xtQmXQOqzIMQN0t-XGA)
[Algorithym](https://open.spotify.com/album/4EthcoHjY4dBlEx0ZF486z?si=79pN_FhrT2-Lh2dr2tPhbA)
## Black Crown Initiate
[Violent Portraits of Doomed Scape](https://open.spotify.com/album/54ZHIe7Vu7XbePqARrA8O2?si=bt5uwLcBRyGv5nS7_C36SQ)
[Selves We Cannot forgive](https://open.spotify.com/album/1WpnpwFHYhGOycymeUg6cc?si=RSB40NSlR7WocvHK2sxzrQ)
[The Wrackage of Stars](https://open.spotify.com/album/3ePkD9ZAmwND0zFqDeGDeM?si=fFrHBm5XQHCokru7_Qrofw)
[Songs of the Crippled Bull](https://open.spotify.com/album/1gWjIbICi7RPkt3l6aBg5z?si=dLfGV5IAQkmMUuRAyycM9w)
## Rivers of Nihil
[Where wols know my name](https://open.spotify.com/album/6Ue1iqByWrHTVFUkTpnm7D?si=zEIrkuzkRs2H4Zj0CnnTcQ)
[The Work](https://open.spotify.com/album/7IyzDICfW1Hi7QsnJolkiR?si=K0dJVJZyTOSNS5hIhOm3kQ)
[Monarchy](https://open.spotify.com/album/2wxBRwMjW74IlOvIcE7I6N?si=xvjz7KTtQoa3WNT-BSrePg)

-------

# Mind Bowing
## Lamb of God
[Ashes of the Wake](https://open.spotify.com/album/3ffdUrEvCQJX6mn2ZTq93m?si=ii7vHZ3VQyySNS8xZgWhqw)
[Sacrament](https://open.spotify.com/album/1cikCss5SRQLrIAmpyHoVw?si=Jb4WMb_mQOCspgO5--czyA)
[Wrath](https://open.spotify.com/album/6yxMWgLfjw7QmzDRruQTNU?si=VM04slxeRhmTjXb_r7y6zQ)
[Resolution](https://open.spotify.com/album/5rMKS2tqK818wfwr4zWQzX?si=QCrZT6jpQW6EwluVaPVaTw)
## Killswitch engage
[As Daylight dies](https://open.spotify.com/album/6iJEtgHTEbVlSS5isIS71z?si=Xz5-Nna6Q9GXiEKBIwOICQ)
[The end of Heartaches](https://open.spotify.com/album/6NrMjaGIZAKZLMzVnkNY4V?si=G9kdKuSORKWl1vAUBQckGQ)
[Killswitch Engage](https://open.spotify.com/album/0Vj4E53uI59Q4hnxiIpZrl?si=_rpSpHL-S866gj2ShyYZ9A)
[Disarm the Descent](https://open.spotify.com/album/6IbymRK2KoxA5THMkqN6qA?si=PE4TU2grQQuz9gcK1zSWzg)
[Incarnate](https://open.spotify.com/album/1zcMqDzxecHx6JQvi7oFmH?si=V0gd65IvRmaXW2R2uaxfuA)


-------

# Pt Podrera
## Meshuggah
[ObZen](https://open.spotify.com/album/2x2VoPa1pG2jSElA73a9Xa?si=bs8Aimp3Qj6DLs1v3Q44Xg)
[The Violent Sleep](https://open.spotify.com/album/7iqG1CTQwnil3TQ0Tiq9DD?si=WfRUlYcJS6mlaBsrbmb21Q)
[Kloss](https://open.spotify.com/album/1WzwZsb0LvVXhngbHjBfd9?si=c9MUNewES2CVcafwd7bh-w)
[Nothing](https://open.spotify.com/album/38UaFYm5kOUXmvXhmCe6FT?si=p9fXikW3Tm6CAFmj4BOGtg)
## Rigns Of Saturn
[Gidim](https://open.spotify.com/album/19NMIHcNa4D8lHFQ6TI3mH?si=QiXj4yMoRcWButPhtGTidw)
[Ultu Ulla](https://open.spotify.com/album/3wC6nH3YDBAb3moXN4ZW3z?si=Zou4I_VQREymvWdSO935rw)
[Lugal Ki En](https://open.spotify.com/album/14iwyKoIbSvwPxRXJko6Ms?si=sK2fC9BsS7WN-4o0oCHc-w)
## Archspire
[Relentles Mutation](https://open.spotify.com/album/3Oi3lWclhSMkDXEtIVPVJi?si=1Cv0M79lS32_ayTbqbHWnw)
[Bleed the Future](https://open.spotify.com/album/5lWIRgkSy5WWOMrZ7xxygH?si=yuJB61NkS46CbLbdOUgRRw)
[The lucid Collective](https://open.spotify.com/album/55mbc2X8vVi0wl7y9QdRzA?si=WxNak6kRTASHIhkZRtIpCw)
## Oceano
[Revelation](https://open.spotify.com/album/16lYcaCSr4VhnRpUvAgVbM?si=MtNLPq_gSTajUggZM-w0JA)
[Ascendants](https://open.spotify.com/album/2RytWWQ3wiU5wgf3JeCfOf?si=eVy3QWJmRgqubQLFCry9bQ)
## Aversion crown
[Xenocide](https://open.spotify.com/album/7wCn1CBUhuPjDlFEhWa7po?si=RLHFIfbcSQSINHyUH8qI4g)
[Tyrant](https://open.spotify.com/album/4YElPACIz10HlTH978a6N8?si=FjgxFVuWQkGL8ftpGPWP8g)
[Hell will come for us all](https://open.spotify.com/album/5u6SV78mDidg0AKa7u3M70?si=OGSv1UMWRyaGgMGuNPg9vg)
## Cytotoxin
[essa vale ouvir](https://open.spotify.com/track/59ouZeHeT1fOw8GGp5cS7e?si=d98d0f3bde184de4)


--------

# Instrumentais
## Merrow
[retrospecial](https://open.spotify.com/album/6byIMc02oSWBlsdiEYdr9X?si=p79azS-ETd-4dGWSU5G7ew)
[Awaken the Stone king](https://open.spotify.com/album/7xdroUao6F1ceW8sbAZGGX?si=3wNosp-ERXOdjVcRa9A_Uw)
## Conquering Dystopia
[Conquering Dystopia](https://open.spotify.com/album/4yaxkGNJVTAVHfqCZd40eK?si=cTbL9qzDTeK2UzkpYBP_YQ)
## breath of nibiru
[Skyline Bazaar](https://open.spotify.com/album/1MNv5oexwPOYeAuSbXnthW?si=3Orq05eLQkmFB66lnyNiNQ)
## Jeff Loomis
[Plains of Oblivion](https://open.spotify.com/album/337UZEcZWgax9G9xYIDN7Z?si=MyfZrcYqRMCtVn5c0iG27g)


------

# Classics
## All That Remains
[the fall of ideals](https://open.spotify.com/album/5LFlBRrSKGrczYQ7avbJ5a?si=f0iMEKkbTpSbFedF8E29tQ)
[Overcome](https://open.spotify.com/album/5Idfe5SehEAZ9uyv9fSKu1?si=OS7B1ib3QQaJjB2q_K5UDA)
## Testament
[Brotherhood of Snake](https://open.spotify.com/album/70oAOzrUemHFWB8VKToEtu?si=_KK51wpkTPSPQgH47yt0-Q)
[Dark root of earth](https://open.spotify.com/album/44aQo8Vzb1i8S2SN5AFZPD?si=3NneHwMhR-KEk092UronVA)
## MothorHead
[Bastards](9https://open.spotify.com/album/0mtmu4b5dw2dYlrAyjGQa7?si=UobkNUObQEmrXwk0d-XuvA)
[Kiss of Death](https://open.spotify.com/album/4syGSCBIzJWYQB15Msvn1y?si=SkGZ4pLEQD2DEnc0UOzLeQ)
[Ace of Spades](https://open.spotify.com/album/7cTXWw02BWHxyH77wRfhuQ?si=ojnjxmAKQv2Vaj3iC-favQ)
[Sacrifice](https://open.spotify.com/album/4z7rbcVZSHWKG6twrWfiPv?si=7oOpK6xnRiaaFT-5RQF-Kw)
[Overkill](https://open.spotify.com/album/1hindeJXXIjo4qrTOOusGG?si=02io1-34R-GIlAyHvTPJtA)

------

# Christians
## Sleeping Giant
[Finished People](https://open.spotify.com/album/6fmr63chs2o5HHaI91dw6M?si=hnPYFNN4QmWDJlSv-mxoTg)
[Kingdom days in an Evil Age](https://open.spotify.com/album/4UlZLfWT8dWgtvUDdNR6AX?si=OXREpnjbSse8gMCnVfT6SQ)
## A Plea For Purging
[The Merriage of Heaven and hell](https://open.spotify.com/album/2KXWlPgj7uMvB0JPXWN5aa?si=_34CyYYMSxu0S39dZj5wdA)
[The Life and Death of APFP](https://open.spotify.com/album/1YVkow0ErNExi51J1fL6N8?si=EkUkfjA4RKKjzuJB52emBg)
[Depravity](https://open.spotify.com/album/4yg9Lt4yR3W65LwjLdI9Rx?si=soDAsTxhQ0KEU0TVs-Swig)
## Impending doom
[The serpent Servant](https://open.spotify.com/album/2oVspI4jZHfjlSjaZE91ii?si=anlhfbE8TbCSvzrwQNRLkQ)
[Baptized in Filth](https://open.spotify.com/album/1RLnU6PWr5swQ9dZVTgqIJ?si=M69mYprnQzuk1ATssvrUdg)
[Death will Rein](https://open.spotify.com/album/4dFZaVyEKGVHd1x155gIeY?si=YumsFFZUSNiZEUWmuZ1qag)
[The Wretched and Godless](https://open.spotify.com/album/4cFRw3CmjXvOULgXpGolkL?si=ccmzIUCMQd64RF-bUQQwFg)
[There Will be Violence](https://open.spotify.com/album/4aP4WAJf53ybkv54k3Smje?si=gkJBu0-zRnSqPCsco1zB4g)
## hope for the Dying
[Legacy](https://open.spotify.com/album/4gMfVHBNiridMWAnqaMbY5?si=78qXuh1vQZa0d5iqfoemqQ)
[Aletheia](https://open.spotify.com/album/4VXv7dFKd4I5MIDuH4iVdq?si=FXyGFzgsRiWjVEVcaXZhaA)
[Dissimulation](https://open.spotify.com/album/6kY2GC2kYBhBqOT7GfJNYY?si=CwX1UUHORmmPK0oMc3Ak6Q)
## In the midst of Lions
[The Heart Of a Man](https://open.spotify.com/album/6ycY4KdMLwvALHB47lHEkT?si=C9LXp69ATXWwR-qHj1_xEQ)
[Shadows](https://open.spotify.com/album/3cFXQnvlirPAegnZgOIVpN?si=rR6stIx_RO6yDLHHkxgF5w)
## Phinehas
[Till the End](https://open.spotify.com/album/7ASI3ItcZ30V0fvTwrZasA?si=5bsLnMTuQ_CBMWVQjZzSrw)
[Dark Flag](https://open.spotify.com/album/5yLGWp6w0g6tCFLnNc6CPP?si=1AHy5sEVSPeN8amjS99nJA)
[The GodMachine](https://open.spotify.com/album/2K2ivQUZCo1LWlA2ZN62gp?si=G1WATsFyS2uL-Uv-NYgNvA)
[the Fire Itself](https://open.spotify.com/album/2jlMaq1dfcSUX9inI8wCox?si=05NdcotVQaqAhj98K4kVrA)
## Becoming the Archetype
[I Am](https://open.spotify.com/album/0rg7OdBgPG5iqlwnX1jeuF?si=gENNu0GfQoCjF0Dn51SexA)
## 7 horns 7 eyes
[Thrones of Absolution](https://open.spotify.com/album/2kaJFqDRn17lsqQ48X7dgD?si=u0Y7JRKdTOmYKdp3446h-Q)
## For Today
[tudo](https://open.spotify.com/artist/3xvHWAD1Bz6vvVmVMPpZJs?si=_LboqUBzTxG609bVJzjkgg)
## Those Who Fear
[Death Sentence](https://open.spotify.com/album/65B24OiouAK3QXWyEBtV8W?si=Kw_3QfgUQe-_7UqyWkRfrQ)
[State of Mind](https://open.spotify.com/album/5rVesy7eATCQuzA3HK7vzC?si=mPVu3ODXR3iqROYFYV78Hg)


------

# Pops
## Rage Against the machine
[The batle of los angeles](https://open.spotify.com/album/2eia0myWFgoHuttJytCxgX?si=wq7vr1OUT867l5vUQyE4Kg)
[Rage Against the Machine](https://open.spotify.com/album/4LaRYkT4oy47wEuQgkLBul?si=lUkHSpwpQDm35EorW28zNQ)
[Evil Empire](https://open.spotify.com/album/24E6rDvGDuYFjlGewp4ntF?si=QH9aLiBLRXa9uCuNlgYxyQ)

## System of a Down
[Toxicity](https://open.spotify.com/album/6jWde94ln40epKIQCd8XUh?si=HgN3k5qqTPW-Ear0Sw5J2g)
[Mezmerize](https://open.spotify.com/album/0cn6MHyx4YuZauaB7Pb66o?si=FX-WA1sKRq-3IQ_K1tTelQ)
[Hypnotize](https://open.spotify.com/album/3QxX3NbWyLlLG6lP1xveL3?si=JrPtGeL0RUi-uJ00OSAKbQ)
[Steal this album](https://open.spotify.com/album/6lA1sGw7eCv27bcpd5E0wT?si=zlh6_VrXSXqD36Gnfq9vzw)
`
// console.log(createTheEmbeds(file))