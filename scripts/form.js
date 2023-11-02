  //form
  document.getElementById("mainForm").addEventListener("submit", function(event) {
const kp1 = document.getElementById("#keyphrase");
const kp2 = document.getElementById("#keyphrase2");
const message = document.getElementById("message")


	if (kp1.value !== kp2.value) {
		message.textContent = "❗Key Phrases DO NOT MATCH!";
		message.style.visibility = "show";
		kp2.style.backgroundColor = "#fff0f3";
		kp2.value = "";
		kp2.focus();
	} else {
		message.style.display = "none";
		kp2.style.backgroundColor = "#fff";
		kp2.style.color = "#000";
	}
})