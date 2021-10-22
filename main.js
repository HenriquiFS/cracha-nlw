const linksSocialMedia = {
  facebook: "henriqui.ferreira",
  github: "HenriquiFS",
  instagram: "henriqui.fs",
  twitter: "henrique_10120",
  youtube: "UCuNemWyJPMY8Od6ZOu9IGbw"
}

function changeSocialMediaLinks() {
  /* document.getElementById('userName').textContent = "Henriqui Ferreira Segantini"
     userName.textContent = "Henriqui Ferreira Segantini" 

     os comandos acimas são meio de alterar os textos no HTML usando o javascipt
     eles estão ocultos porque nós utilizamos a API para fazer essa alteração de acordo
     com as informações do github*/

  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    // o comando acima vai pegar o nome da classe de cada li, que nesse caso vão ser os nomes das páginas

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    // o comando acima vai pegar o primeiro filho do elemento children, que nesse caso seria o <a></a>
    // que possui o link que é o href, e vai substituir ele por outro link

    // alert(li.children[0].href)
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos () {

  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url).then( response => response.json() ).then( data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userGitHubLink.href = data.html_url
    userPhoto.src = data.avatar_url
    userLogin.textContent = data.login
  } )
  /* no comando acima ele vai tentar pegar essa URL, se conseguir ele vai receber a resposta, o response.json() 
     serve para transformar a resposta em formato json */

}

getGitHubProfileInfos()