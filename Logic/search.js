const subjects = [
    { name: 'ASD 1-L1-S1', link: 'https://drive.google.com/drive/folders/1Kh8l9c2xD3bw2lBD6_iq-GyG4SkLre-s?usp=drive_link' },
    { name: 'Analyse 1-L1-S1', link: 'https://drive.google.com/drive/folders/1NxMkbDB768M-yKSPEkopOlPJwIzR92Hb?usp=drive_link' },
    { name: 'Algèbre 1-L1-S1', link: 'https://drive.google.com/drive/folders/1qCnFgvtYx3kwuv_gvVY2MrXI27VCeboO?usp=drive_link' },
    { name: 'Structure Machine 1-L1-S1', link: 'https://drive.google.com/drive/folders/188QaTfQQzu3cRlRKkKATD2nsnbyBUfXK?usp=drive_link' },
    { name: 'Physique 1-L1-S1', link: 'https://drive.google.com/drive/folders/1kYwLRdn9Of6CaoRtBxp5m_8bRBonY4hu?usp=drive_link' },
    { name: 'Anglais 1-L1-S1', link: 'https://drive.google.com/drive/folders/1tZrOh8sqDCcGh27Hv5Pc-9ZP2JENxjbn?usp=drive_link' },
    { name: 'TCE L1-S1', link: 'https://drive.google.com/drive/folders/1CCqSDp5IuQYGCw3YnDf3nlvtmpvcTZMx?usp=drive_link' },
    { name: 'ASD 2-L1-S2', link: 'https://drive.google.com/drive/folders/1sh-sAjEvI90XpxHqkWrGO8LR0NynpcyD?usp=drive_link' },
    { name: 'Analyse 2-L1-S2', link: 'https://drive.google.com/drive/folders/1huerT2GDaT0FVbgTWqaq1JYFJRfeFu4p?usp=drive_link' },
    { name: 'Algèbre 2-L1-S2', link: 'https://drive.google.com/drive/folders/19jvImEf-asygBk8usF1MD_1B1cRPibcY?usp=drive_link' },
    { name: 'Structure Machine 2-L1-S2', link: 'https://drive.google.com/drive/folders/1Md-9A9LwtKGXqBDm3qdG04qVwcfCIvjq?usp=drive_link' },
    { name: 'Proba-Stats L1-S2', link: 'https://drive.google.com/drive/folders/1BnH0R79D6R8vFfHpk_N-az4jEo6pTD3p?usp=drive_link' },
    { name: 'Physique 2-L1-S2', link: 'https://drive.google.com/drive/folders/16DJUvmGQ5rAWBFAYzkilEGSuqBHhKdND?usp=drive_link' },
    { name: 'OPM L1-S2', link: 'https://drive.google.com/drive/folders/1UyhX9iCKT1va8agnRuG6e0n4ywVHhWP9?usp=drive_link' },
    { name: 'TIC L1-S2', link: 'https://drive.google.com/drive/folders/1C9TMU6UdnDkn82VDGX4v5LPPe_72L2f0?usp=drive_link' },
    { name: 'ASD 3-L2-S3', link: 'https://drive.google.com/drive/folders/18cjrh2V-B8yjvKUPEMxlIjSs7m6EWDbj?usp=drive_link' },
    { name: 'Architecture Des Ordinateurs L2-S3', link: 'https://drive.google.com/drive/folders/15I0rXCXZrqs7WsvaaGtt0N1CgLJUwzUj?usp=drive_link' },
    { name: 'Système Information L2-S3', link: 'https://drive.google.com/drive/folders/1vshtIzGhkuwjz3n6noRVCK91UDVgCPKN?usp=drive_link' },
    { name: 'Théorie Des Graphes L2-S3', link: 'https://drive.google.com/drive/folders/1HyxbzstwjsIBmBKUgESDOi9jNSiqMtV3?usp=drive_link' },
    { name: 'Logique Mathématique L2-S3', link: 'https://drive.google.com/drive/folders/1eHyGXFww45IxM1Mw8B8EY4TH0xsVrhfN?usp=drive_link' },
    { name: 'Méthodes Numériques L2-S3', link: 'https://drive.google.com/drive/folders/1LREeXuFRZBJ16tn-8wDg706EXEq5GLR2?usp=drive_link' },
    { name: 'Anglais 2-L2-S3', link: 'https://drive.google.com/drive/folders/1soxZEehADTuNwwtWM3pB43oDMiKhI8fe?usp=drive_link' },
    { name: 'Base De Données L2-S4', link: 'https://drive.google.com/drive/folders/15SjwyclRenwI7kc6eGzje1t5rCN8yR-f?usp=drive_link' },
    { name: 'Réseaux L2-S4', link: 'https://drive.google.com/drive/folders/1L3-wurkrvdytuDDRjZCna2ZoH-LgCgvS?usp=drive_link' },
    { name: 'Système Exploitation 1-L2-S4', link: 'https://drive.google.com/drive/folders/1dCBKdO2X7H2EZK7mhP8qfufVr_Vjkq2x?usp=drive_link' },
    { name: 'Developpement Web L2-S4', link: 'https://drive.google.com/drive/folders/1uS8Szi682g7Lp4XERiwu971tcAx2FehP?usp=drive_link' },
    { name: 'Programmation Orienté Objet L2-S4', link: 'https://drive.google.com/drive/folders/10gXAt6ACWdFlwXlXGavTIKXKAJ_DiIr7?usp=drive_link' },
    { name: 'Théorie Des Langages L2-S4', link: 'https://drive.google.com/drive/folders/1Bs7jwdvKgheIVtCErd7OPiefnc6Qo5w9?usp=drive_link' },
    { name: 'Anglais 3', link: 'https://drive.google.com/drive/folders/1mDxs9ZsWUs4xBI6hm-nUhwg1K2VN0mWp?usp=drive_link' },
    { name: 'Système Exploitation 2-L3-S5', link: 'https://drive.google.com/drive/folders/1HC11j3lddPipSbzFNCdWNlIWN8BOCyco?usp=drive_link' },
    { name: 'Compilation L3-S5', link: 'https://drive.google.com/drive/folders/1tmuFRrZNORP28inVx_g9sOx7Dx1Jbos8?usp=drive_link' },
    { name: 'Génie Logiciel L3-S5', link: 'https://drive.google.com/drive/folders/1mEVqdJymsygLaVbfkCjAQESLlADucOOH?usp=drive_link' },
    { name: 'Interaction Homme-Machine L3-S5', link: 'https://drive.google.com/drive/folders/1QuH5Pb0ezHoFO32otcY7evL-l57pl_Z7?usp=drive_link' },
    { name: 'Programmation Linéaire L3-S5', link: 'https://drive.google.com/drive/folders/1Jb4Bk_5Yqg-fp3zcKI3Yqa5jWryk8lu1?usp=drive_link' },
    { name: 'Proba-Stats L3-S5', link: 'https://drive.google.com/drive/folders/1kk-HeQnk1taZ-n9TF-Rx799K9Rx_xAbP?usp=drive_link' },
    { name: 'Système Information Distribué L3-S5', link: 'https://drive.google.com/drive/folders/1esyAzZM-TlO9ZcwjD-YaxTF6tAE2jH7O?usp=drive_link' },
    { name: 'Système Aide à la Décision L3-S5', link: 'https://drive.google.com/drive/folders/1l95YFtBhiEYbAeHlUH1f2u-uBfWz-Gzy?usp=drive_link' },
    { name: 'Administration des Systèmes Information L3-S5', link: 'https://drive.google.com/drive/folders/18bO9N46XyVFjaIVw0Hd5W5RjS4yBYr2H?usp=drive_link' },
    { name: 'Programmation Web Avancée L3-S5', link: 'https://drive.google.com/drive/folders/105mZZ0ZAEoZindPV3p7S-KrybQw2Pcfy?usp=drive_link' },
    { name: 'ENVS L3-S5', link: 'https://drive.google.com/drive/folders/1qt__Rjxq2BMZYmQfKMXAy5oCyAZptETt?usp=drive_link' },
    { name: 'Application Mobile L3-S6', link: 'https://drive.google.com/drive/folders/1CR7Xpyg2J4CGFiiEOMFPqOJ8OQa2nNY6?usp=drive_link' },
    { name: 'Données Semi-Structurés L3-S6', link: 'https://drive.google.com/drive/folders/1SGo9FnTyW5MM8umBjrjzk5lWabDL-gI5?usp=drive_link' },
    { name: 'Sécurité Informatique L3-S6', link: 'https://drive.google.com/drive/folders/1zmE9bk86Dn85kKenEAlFrX5PZ7m0Nlvh?usp=drive_link' },
    { name: 'Intelligence Artificielle L3-S6', link: 'https://drive.google.com/drive/folders/12oCyZ7T0PpMRAkM2zdsB6fIigiCOv79s?usp=drive_link' },
    { name: 'Recherche Information L3-S6', link: 'https://drive.google.com/drive/folders/1YtEgoN201WTZwpo0kv158A2d9MkneURP?usp=drive_link' },
    { name: 'Bussines Intelligence L3-S6', link: 'https://drive.google.com/drive/folders/1E4I5G48B_dtn0HKSVW-6HcowG07OzNZD?usp=drive_link' },
    { name: 'Rédaction Scientifique L3-S6', link: 'https://drive.google.com/drive/folders/1gmyxClYOs0_ECxvYxY3AM1D70nzb3KI4?usp=drive_link' },
    { name: 'Startup L3-S6', link: 'https://drive.google.com/drive/folders/1gA1Zc743x5rR1Rr3mA03V-t3alx8AXro?usp=drive_link' },
  ];
  const searchInput = document.getElementById('search-input');
const suggestionsList = document.getElementById('suggestions-list');

searchInput.addEventListener('input', () => {
  const inputValue = searchInput.value.toLowerCase();
  const matchingSubjects = subjects.filter(subject => subject.name.toLowerCase().includes(inputValue));

  // Clear the previous list of suggestions
  suggestionsList.innerHTML = '';

  // Add a new list item for the first 3 matching subjects
  const numSuggestionsToShow = 3;
  const numAdditionalSuggestions = matchingSubjects.length - numSuggestionsToShow;
  matchingSubjects.slice(0, numSuggestionsToShow).forEach(subject => {
    const listItem = document.createElement('li');
    listItem.textContent = subject.name;
    listItem.addEventListener('click', () => {
      // Redirect to the Google Drive link when the user clicks on a suggestion
      window.location.href = subject.link;
    });
    suggestionsList.appendChild(listItem);
  });

  // If there are additional suggestions, add a "View all" link
  if (numAdditionalSuggestions > 0) {
    const viewAllLink = document.createElement('li');
    viewAllLink.textContent = `View all ${numAdditionalSuggestions} results for "${inputValue}"`;
    viewAllLink.addEventListener('click', () => {
      // Redirect to the "view all" page with the search query as a parameter
      window.location.href = `URL`; //hdi mzl link
    });
    suggestionsList.appendChild(viewAllLink);
  }

  // Show the list of suggestions if there are any matching subjects
  if (matchingSubjects.length > 0) {
    suggestionsList.style.display = 'block';
  } else {
    suggestionsList.style.display = 'none';
  }
});

// Hide the list of suggestions when the user clicks outside of the search bar
document.addEventListener('click', (event) => {
  if (!event.target.matches('#search-input')) {
    suggestionsList.style.display = 'none';
  }
});

// Close the suggestions list when the user deletes their input
searchInput.addEventListener('input', () => {
    if (searchInput.value.length === 0) {
      suggestionsList.style.display = 'none';
    }
  });