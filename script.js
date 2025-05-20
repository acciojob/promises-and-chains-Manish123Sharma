//your JS code here. If required.
document.getElementById('voteForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form from refreshing the page

  const name = document.getElementById('name').value.trim();
  const age = document.getElementById('age').value.trim();

  // Validation
  if (!name || !age) {
    alert('Please enter valid details');
    return;
  }

  // Create a promise to simulate async age check
  const checkEligibility = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (parseInt(age) > 18) {
        resolve(name);
      } else {
        reject(name);
      }
    }, 4000);
  });

  // Handle promise
  checkEligibility
    .then((name) => {
      alert(`Welcome, ${name}. You can vote.`);
    })
    .catch((name) => {
      alert(`Oh sorry ${name}. You aren't old enough.`);
    });
});
