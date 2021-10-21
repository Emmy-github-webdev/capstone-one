/* mobile full screen overlay */
document.addEventListener('DOMContentLoaded', function() {
  const fsNavCloseBtn = document.querySelector('.fsnav-close');

  fsNavCloseBtn.addEventListener('click', function() {
    this.parentElement.className = 'fsnav';
  });
})

function openNav() {
  const fsNav = document.querySelector('.fsnav');
  fsNav.className = 'fsnav fsnav-open';
}

/* create featured speaker dynamically */
const featuredSpeakerSection = document.querySelector('.featured-speaker');

const featuredSpeakers = [
  {
    id: 1,
    speakerImage: 'images/sridhar.jpg',
    speakerName: 'Udbhav Tiwari',
    speakerTitle: 'Minister of Communication',
    speakerDetail: 'Udbhav Tiwari is the minister of communication of Federal Republic of Nigeria.',
  },

  {
    id: 2,
    speakerImage: 'images/subhas.jpg',
    speakerName: 'Vidur Gupta',
    speakerTitle: 'Founder & CMO, Indusface',
    speakerDetail: 'Vidur Gupta is the founder and CMO of Indusface security.',
  },

  {
    id: 3,
    speakerImage: 'images/subhashish.jpg',
    speakerName: 'James Oche',
    speakerTitle: 'President, Nigeria SME Forum',
    speakerDetail: 'James Oche is the President, Nigeria SME forum Nigeria.',
  },

  {
    id: 4,
    speakerImage: 'images/sunil.jpg',
    speakerName: 'Visagan Subburayalu',
    speakerTitle: 'Director of Technology Target',
    speakerDetail: '  Visagan Subburayalu is the Director of Technology Target limited.',
  },

  {
    id: 5,
    speakerImage: 'images/udbhav.jpg',
    speakerName: 'Dr Suleman Lamido',
    speakerTitle: ' Kaduna state commissioner for communication',
    speakerDetail: 'Dr Suleman Lamido is the commissioner for communication of Kaduna state.',
  },

  {
    id: 6,
    speakerImage: 'images/attahiru.jpeg',
    speakerName: 'MJ Attahiru Sule',
    speakerTitle: 'Major General of Nigerian Army',
    speakerDetail: 'MJ Attahiru Sule is the Cheif of Defence Staff of Nigeria.',
  },
];