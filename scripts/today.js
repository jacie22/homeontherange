const options = {weekday: 'long', month: 'long', day: 'numeric'};
const today = new Date();

const formattedDate = today.toLocaleDateSrting('en-US', options);


document.getElementById('tOday').textContent = formattedDate;
