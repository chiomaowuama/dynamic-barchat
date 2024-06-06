async function getingdata() {
  let responds = await fetch("data.json");
  let datas = await responds.json();
  let Data = datas.map((data) => {
    return {
      amount: data.amount,
      day: data.day,
    };
  });

  Data.forEach((data) => {
    let day = data.day.toLowerCase();
    let amount = data.amount;

    let barElement = document.getElementById(`bar-${day}`);
    if (barElement) {
      let hoverContent = barElement.querySelector(".hover-content");
      hoverContent.textContent = `$${amount}`;
    }
  });
  let totalAmount = Data.reduce((sum, current) => sum + current.amount, 0);
  console.log("Total Amount:", totalAmount);
}
getingdata();
