document.addEventListener('DOMContentLoaded', function () {
    // Get all product buttons
    const braceletBtn = document.getElementById('braceletBtn');
    const ringBtn = document.getElementById('ringBtn');
    const earringsBtn = document.getElementById('earringsBtn');
    const chainsBtn = document.getElementById('chainsBtn');

  
    // Get all product sections
    const braceletSection = document.getElementById('braceletSection');
    const ringSection = document.getElementById('ringSection');
    const earringsSection = document.getElementById('earringsSection');
    const chainsSection = document.getElementById('chainsSection');

  
    // Function to hide all sections
    function hideAllSections() {
      braceletSection.style.display = 'none';
      ringSection.style.display = 'none';
      earringsSection.style.display = 'none';
      chainsSection.style.display = 'none';
    }
  
    // Event listener for Bracelet button
    braceletBtn.addEventListener('click', function() {
      hideAllSections();  // Hide other sections
      braceletSection.style.display = 'block';  // Show the Bracelet section
    });
  
    // Event listener for Ring button
    ringBtn.addEventListener('click', function() {
      hideAllSections();  // Hide other sections
      ringSection.style.display = 'block';  // Show the Ring section
    });
  
    // Event listener for Earrings button
    earringsBtn.addEventListener('click', function() {
      hideAllSections();  // Hide other sections
      earringsSection.style.display = 'block';  // Show the Earrings section
    });

    chainsBtn.addEventListener('click', function() {
      hideAllSections();  // Hide other sections
      chainsSection.style.display = 'block';  // Show the chains section
    });
  });
  