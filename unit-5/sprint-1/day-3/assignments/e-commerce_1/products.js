
var Products = JSON.parse(localStorage.getItem("Products")) || [];

displayproducts(Products);

function displayproducts(data) {
        var count = 0;

        document.getElementById("container").innerText = "";
        data.map(function (elem, index) {
                count++;
                var div = document.createElement("div");
                div.setAttribute("class", "product")
                var img = document.createElement("img");
                img.setAttribute("src", elem.img_url);
                img.setAttribute("alt", elem.img);
                var h3 = document.createElement("h3");
                h3.innerText = elem.product_name;
                var div2 = document.createElement("div");
                var prize = document.createElement("p");
                prize.innerText = "Rs " + elem.price;
                var sold = document.createElement("p");
                sold.innerText = elem.sold;
                div2.append(prize);
                var btn1 = document.createElement("button");
                btn1.setAttribute("id", "remove")
                btn1.style.marginBottom = "10px";
                var btn2 = document.createElement("button");
                btn2.setAttribute("id", "sold")
                btn1.innerText = "Remove";
                btn2.innerText = "Sold";
                if (elem.sold == "true") {
                        btn2.style.background = "red";
                } else {
                        btn2.style.background = "green"
                }
                btn1.addEventListener("click", function () {
                        del(elem, index);
                })
                btn2.addEventListener("click", function () {
                        toggle(elem, i);
                })
                div.append(img, h3, div2, btn1, btn2);
                document.querySelector("#container").append(div);

                // To Delete Product //
                function del(elem, index) {
                        Products.splice(index, 1)
                        localStorage.setItem("Products", JSON.stringify(Products));
                        displayproducts(Products);
                }
                //  TO COUNT THE NUMBERS OF PRODUCTS   //
                var num = document.getElementById("counter");
                num.innerText = "Total Items- " + count;

                function toggle(elem, i) {
                        if (elem.sold == "true") {
                                localStorage.setItem("Products", JSON.stringify(Products));
                                console.log("a");
                        } else {
                                elem.sold == "true";
                                localStorage.setItem("Products", JSON.stringify(Products));
                                console.log("b");
                        }
                }

        })
}

