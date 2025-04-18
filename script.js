document.getElementById("dataForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const firstName = this.firstName.value;
  const lastName = this.lastName.value;
  const street = this.street.value;
  const city = this.city.value;
  const country = this.country.value;

  const message = `الاسم: ${firstName}\nالعائلة: ${lastName}\nالشارع: ${street}\nالمدينة: ${city}\nالدولة: ${country}`;
  const token = "7874509299:AAEXnwpKl-m7E2pVuuYWxfixW-YC1oZ3Ng0";
  const chat_id = "6817512459";

  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: chat_id,
      text: message
    })
  })
  .then(res => res.ok ? "تم الإرسال بنجاح" : "فشل الإرسال")
  .then(msg => document.getElementById("status").textContent = msg)
  .catch(err => {
    document.getElementById("status").textContent = "حدث خطأ";
    console.error(err);
  });
});