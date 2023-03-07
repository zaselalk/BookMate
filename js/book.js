const books = {
  data: [
    {
      name: "Psychology & Money",
      category: "science",
      author: "Morgan Housel",
      discription:
        "Our library management system is designed to provide easy access to books, magazines, journals,",
      Samplediscription:
        "Our library management system is designed to provide easy access to books, magazines, journals,            ",
      img: "images/search_img/bookImages/psychology.png",
      filePath: "books/PsychologyOfmoney.pdf",
      pagePath: "index.html",
      stars: "4",
    },

    {
      name: "How Innovation",
      category: "technology",
      author: "Morgan Housel",
      discription:
        "Our library management system is designed to provide easy access to books, magazines, journals,",
      Samplediscription:
        "Our library management system is designed to provide easy access to books, magazines, journals,            ",
      img: "images/search_img/bookImages/HowInnovation.png",
      filePath: "books/PsychologyOfmoney.pdf",
      pagePath: "HowInnovation.html",
      stars: "3",
    },
  ],
};

function loadBooks(cate) {
  var len = books.data.length;
  let details = books.data;
  var dispay = document.getElementById("searchResaults");

  dispay.innerHTML = "";

  for (var x = 0; x < len; x++) {
    if (cate != "all") {
      if (details[x].category == cate) {
        var card = document.createElement("div");
        card.classList.add("card");
        dispay.appendChild(card);

        var BookImgContainer = document.createElement("div");
        BookImgContainer.classList.add("BookImgContainer");
        card.appendChild(BookImgContainer);

        var detailView = document.createElement("div");
        detailView.classList.add("details");
        card.appendChild(detailView);

        var bookImage = document.createElement("img");
        bookImage.classList.add("BookImg");
        bookImage.src = details[x].img;
        BookImgContainer.appendChild(bookImage);

        var name = document.createElement("p");
        name.textContent = details[x].name;
        name.classList.add("BookTitle");
        detailView.appendChild(name);

        var author = document.createElement("p");
        author.textContent = details[x].author;
        author.classList.add("BookAuthor");
        detailView.appendChild(author);

        var starView = document.createElement("div");
        starView.classList.add("starView");
        detailView.appendChild(starView);

        for (var s = 1; s <= details[x].stars; s++) {
          var star = document.createElement("img");
          star.classList.add("star");
          star.src = "images/search_Img/star-fill.svg";
          starView.appendChild(star);
        }

        let emptyStars = 5 - details[x].stars;

        for (var s = 1; s <= emptyStars; s++) {
          var star = document.createElement("img");
          star.classList.add("star");
          star.src = "images/search_Img/star.svg";
          starView.appendChild(star);
        }

        var sample = document.createElement("p");
        sample.textContent = details[x].Samplediscription;
        sample.classList.add("BookPara");
        detailView.appendChild(sample);

        var cardBtnView = document.createElement("div");
        cardBtnView.classList.add("cardBtnView");
        detailView.appendChild(cardBtnView);

        var btn1 = document.createElement("a");
        btn1.textContent = "View";
        btn1.setAttribute("href", details[x].pagePath);
        btn1.classList.add("cardBtn", "cardBtn1");
        cardBtnView.appendChild(btn1);

        var btn2 = document.createElement("a");
        btn2.textContent = "Download";
        btn2.setAttribute("download", details[x].name + ".pdf");
        btn2.setAttribute("href", details[x].filePath);
        btn2.setAttribute("target", "_blank");
        btn2.classList.add("cardBtn", "cardBtn2");
        cardBtnView.appendChild(btn2);
      }
    } else {
      var card = document.createElement("div");
      card.classList.add("card");
      dispay.appendChild(card);

      var BookImgContainer = document.createElement("div");
      BookImgContainer.classList.add("BookImgContainer");
      card.appendChild(BookImgContainer);

      var detailView = document.createElement("div");
      detailView.classList.add("details");
      card.appendChild(detailView);

      var bookImage = document.createElement("img");
      bookImage.classList.add("BookImg");
      bookImage.src = details[x].img;
      BookImgContainer.appendChild(bookImage);

      var name = document.createElement("p");
      name.textContent = details[x].name;
      name.classList.add("BookTitle");
      detailView.appendChild(name);

      var author = document.createElement("p");
      author.textContent = details[x].author;
      author.classList.add("BookAuthor");
      detailView.appendChild(author);

      var starView = document.createElement("div");
      starView.classList.add("starView");
      detailView.appendChild(starView);

      for (var s = 1; s <= details[x].stars; s++) {
        var star = document.createElement("img");
        star.classList.add("star");
        star.src = "images/search_Img/star-fill.svg";
        starView.appendChild(star);
      }

      let emptyStars = 5 - details[x].stars;

      for (var s = 1; s <= emptyStars; s++) {
        var star = document.createElement("img");
        star.classList.add("star");
        star.src = "images/search_Img/star.svg";
        starView.appendChild(star);
      }

      var sample = document.createElement("p");
      sample.textContent = details[x].Samplediscription;
      sample.classList.add("BookPara");
      detailView.appendChild(sample);

      var cardBtnView = document.createElement("div");
      cardBtnView.classList.add("cardBtnView");
      detailView.appendChild(cardBtnView);

      var btn1 = document.createElement("a");
      btn1.textContent = "View";
      btn1.setAttribute("href", details[x].pagePath);
      btn1.classList.add("cardBtn", "cardBtn1");
      cardBtnView.appendChild(btn1);

      var btn2 = document.createElement("a");
      btn2.textContent = "Download";
      btn2.setAttribute("download", details[x].name + ".pdf");
      btn2.setAttribute("href", details[x].filePath);
      btn2.setAttribute("target", "_blank");
      btn2.classList.add("cardBtn", "cardBtn2");
      cardBtnView.appendChild(btn2);
    }
  }
}

function searchBook(cate) {
  var len = books.data.length;
  let details = books.data;
  var dispay = document.getElementById("searchResaults");
  var search = document.getElementById("searchBookInput").value;

  dispay.innerHTML = "";

  var count = 0;

  for (var x = 0; x < len; x++) {
    if (cate != "all") {
      if (details[x].category == cate && details[x].name == search) {
        count++;

        var card = document.createElement("div");
        card.classList.add("card");
        dispay.appendChild(card);

        var BookImgContainer = document.createElement("div");
        BookImgContainer.classList.add("BookImgContainer");
        card.appendChild(BookImgContainer);

        var detailView = document.createElement("div");
        detailView.classList.add("details");
        card.appendChild(detailView);

        var bookImage = document.createElement("img");
        bookImage.classList.add("BookImg");
        bookImage.src = details[x].img;
        BookImgContainer.appendChild(bookImage);

        var name = document.createElement("p");
        name.textContent = details[x].name;
        name.classList.add("BookTitle");
        detailView.appendChild(name);

        var author = document.createElement("p");
        author.textContent = details[x].author;
        author.classList.add("BookAuthor");
        detailView.appendChild(author);

        var starView = document.createElement("div");
        starView.classList.add("starView");
        detailView.appendChild(starView);

        for (var s = 1; s <= details[x].stars; s++) {
          var star = document.createElement("img");
          star.classList.add("star");
          star.src = "images/search_Img/star-fill.svg";
          starView.appendChild(star);
        }

        let emptyStars = 5 - details[x].stars;

        for (var s = 1; s <= emptyStars; s++) {
          var star = document.createElement("img");
          star.classList.add("star");
          star.src = "images/search_Img/star.svg";
          starView.appendChild(star);
        }

        var sample = document.createElement("p");
        sample.textContent = details[x].Samplediscription;
        sample.classList.add("BookPara");
        detailView.appendChild(sample);

        var cardBtnView = document.createElement("div");
        cardBtnView.classList.add("cardBtnView");
        detailView.appendChild(cardBtnView);

        var btn1 = document.createElement("a");
        btn1.textContent = "View";
        btn1.setAttribute("href", details[x].pagePath);
        btn1.classList.add("cardBtn", "cardBtn1");
        cardBtnView.appendChild(btn1);

        var btn2 = document.createElement("a");
        btn2.textContent = "Download";
        btn2.setAttribute("download", details[x].name + ".pdf");
        btn2.setAttribute("href", details[x].filePath);
        btn2.setAttribute("target", "_blank");
        btn2.classList.add("cardBtn", "cardBtn2");
        cardBtnView.appendChild(btn2);
      }
    } else {
      if (details[x].name == search) {
        count++;

        var card = document.createElement("div");
        card.classList.add("card");
        dispay.appendChild(card);

        var BookImgContainer = document.createElement("div");
        BookImgContainer.classList.add("BookImgContainer");
        card.appendChild(BookImgContainer);

        var detailView = document.createElement("div");
        detailView.classList.add("details");
        card.appendChild(detailView);

        var bookImage = document.createElement("img");
        bookImage.classList.add("BookImg");
        bookImage.src = details[x].img;
        BookImgContainer.appendChild(bookImage);

        var name = document.createElement("p");
        name.textContent = details[x].name;
        name.classList.add("BookTitle");
        detailView.appendChild(name);

        var author = document.createElement("p");
        author.textContent = details[x].author;
        author.classList.add("BookAuthor");
        detailView.appendChild(author);

        var starView = document.createElement("div");
        starView.classList.add("starView");
        detailView.appendChild(starView);

        for (var s = 1; s <= details[x].stars; s++) {
          var star = document.createElement("img");
          star.classList.add("star");
          star.src = "images/search_Img/star-fill.svg";
          starView.appendChild(star);
        }

        let emptyStars = 5 - details[x].stars;

        for (var s = 1; s <= emptyStars; s++) {
          var star = document.createElement("img");
          star.classList.add("star");
          star.src = "images/search_Img/star.svg";
          starView.appendChild(star);
        }

        var sample = document.createElement("p");
        sample.textContent = details[x].Samplediscription;
        sample.classList.add("BookPara");
        detailView.appendChild(sample);

        var cardBtnView = document.createElement("div");
        cardBtnView.classList.add("cardBtnView");
        detailView.appendChild(cardBtnView);

        var btn1 = document.createElement("a");
        btn1.textContent = "View";
        btn1.setAttribute("href", details[x].pagePath);
        btn1.classList.add("cardBtn", "cardBtn1");
        cardBtnView.appendChild(btn1);

        var btn2 = document.createElement("a");
        btn2.textContent = "Download";
        btn2.setAttribute("download", details[x].name + ".pdf");
        btn2.setAttribute("href", details[x].filePath);
        btn2.setAttribute("target", "_blank");
        btn2.classList.add("cardBtn", "cardBtn2");
        cardBtnView.appendChild(btn2);
      }
    }
  }

  if (count == 0) {
    var noItemView = document.createElement("div");
    noItemView.classList.add("NoresaultText");
    dispay.appendChild(noItemView);

    var noImg = document.createElement("img");
    noImg.classList.add("noResaultImg");
    noImg.src = "images/search_Img/book.svg";
    noItemView.appendChild(noImg);

    var NoText = document.createElement("h1");
    NoText.textContent = "No Book Found";
    noItemView.appendChild(NoText);
  }

  window.scroll({
    top: 700,
    left: 100,
    behavior: "smooth",
  });
}
