document.getElementById("dataForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const data = {
    firstName: this.firstName.value,
    lastName: this.lastName.value,
    houseNumber: this.houseNumber.value,
    floor: this.floor.value,
    street: this.street.value,
    city: this.city.value,
    country: this.country.value
  };

  const message = `
الاسم: ${data.firstName}
العائلة: ${data.lastName}
رقم المنزل: ${data.houseNumber}
الطابق: ${data.floor}
الشارع: ${data.street}
المدينة: ${data.city}
الدولة: ${data.country}
  `;

  const token = "TOKEN";
  const chat_id = "0000";

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
