async function getCoinapi() {
  console.log("hello");
  const jsondata = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );
  const jsdata = await jsondata.json();
  console.log(jsdata);
  if (jsdata.length > 0) {
    var temp = "";

    jsdata.forEach((u) => {
      temp += "<tr>";
      temp += "<td>" + u.name + "</td>";
      temp += "<td><img src ='" + u.image + "'class =crypto-logo></td>";
      temp += "<td>" + u.symbol + "</td>";
      temp += "<td>" + u.current_price + "</td>";
      if (u.price_change_percentage_24h > 0) {
        temp += "<td class='green'>" + u.price_change_percentage_24h + "</td>";
      } else {
        temp += "<td class='red'>" + u.price_change_percentage_24h + "</td>";
      }
      temp += "<td>" + u.market_cap + "</td>";
    });
    document.getElementById("coinTable").innerHTML = temp;
  }

  console.log(document.getElementById("coinTable"));
  /*let Table = document.getElementById("main-table");

  let tr = Table.getElementsByTagName("tr");

  for (var i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[3];
    console.log(td);

    //var myTable = document.getElementById("coinTable");

    if (td) {
      td.style.color = "green";
    } /*  else {
      td.style.color = "red";
    }*/

  /*jsdata.forEach((u) => {
        var priceChange = u.price_change_percentage_24h;
        console.log(priceChange);
        if (priceChange) {
          myTable.getElementById("price-change").style.display = "color:green";
        }
      });*/
}

getCoinapi();

search = () => {
  let filter = document.getElementById("search-input").value.toUpperCase();
  let Table = document.getElementById("main-table");

  let tr = Table.getElementsByTagName("tr");

  for (var i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[0];

    if (td) {
      let textValue = td.textContent || td.innerHTML;
      console.log(textValue);
      if (textValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
};

function price() {
  let Table = document.getElementById("main-table");

  let tr = Table.getElementsByTagName("tr");

  for (var i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[3].textContent;
    console.log(td);
    let priceChange = td;
  }
}

/*function buildTable(data) {
  var table = document.getElementById("coinTable");

  for (var i = 0; i < 10; i++) {
    var row = (
      <tr>
        <td>${data[i].name}</td>
        <td>${data[i].symbol}</td>
        <td>${data[i].curernt_price}</td>
        <td>${data[i].price_change_percentage_24h}</td>
      </tr>
    );
    table.innerHTML += row;
  }
}
*/
let darkmode = document.getElementsByClassName("dark-btn");
darkmode.addEventListener("click", () => {});
