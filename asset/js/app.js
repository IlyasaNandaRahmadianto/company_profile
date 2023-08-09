$(window).on("load", function () {
  const elem = document.querySelector(".mansory");
  new Masonry(elem, {
    // options
    itemSelector: ".mansory-item",
    columnWidth: 200,
    gutter: 20,
    columnWidth: ".mansory-sizer",
    percentPosition: true,
  });

  $(".btn-to-top").click(function () {
    $("html", "body").animate(
      {
        scrollTop: 0,
      },
      1500,
      "easeInOutExpo"
    );
  });

  AOS.init();

  const portofolioIsotope = $(".portofolio-container").isotope({
    itemSelector: ".portofolio-item",
  });

  $(".portofolio-filter li").click(function () {
    $(".portofolio-filter li").removeClass("filter-active");
    $(".portofolio-filter li").removeClass("text-white");
    $(this).addClass("filter-active");
    $(this).addClass("text-white");

    portofolioIsotope.isotope({
      filter: $(this).data("filter"),
    });

    AOS.init();
  });
});
