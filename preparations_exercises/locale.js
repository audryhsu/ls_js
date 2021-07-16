
function greet(languageCode) {
  switch (languageCode) {
    case 'en': return 'Hi!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
  }
}
function extractLanguage(code) {
  return code.slice(0,2);
}

function extractRegion(code) {
  return code.slice(3,5);
}

function localGreet(isoCode) {
  if (extractLanguage(isoCode) === 'en') {
    switch (extractRegion(isoCode)) {
      case 'US': return 'Hey';
      case 'GB': return 'Hello!';
      case 'AU': return 'Howdy!';
    }
  }
  else if (extractLanguage(isoCode) === 'fr') {
    return 'Salut!';
  }
  return 'Hello world...?';

}
console.log(

  localGreet('fr_FR.UTF-8') // 'Salut!'
);

localGreet('en_US.UTF-8')// 'Hey!'
localGreet('en_AU.UTF-8'); // 'Howdy!'
localGreet('fr_CA.UTF-8'); // 'Salut!'
localGreet('fr_MA.UTF-8'); // 'Salut!'
