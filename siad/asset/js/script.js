$(document).ready(function () {
    $('#tables').DataTable({
        scrollY: 250,
        searching: true,
        scrollX: true,

    });
    $('#tables2').DataTable({
        scrollY: 500,
        searching: true,
        scrollX: true
    });
    $('#tables3').DataTable({
        scrollY: 627,
        searching: true,
        scrollX: true
    });
    $('#tables4').DataTable({
        scrollY: 527,
        searching: true,
        scrollX: true
    });
    $('#tables5').DataTable({
        scrollY: 527,
        searching: true,
        scrollX: true
    });
    $('#tables6').DataTable({
        scrollY: 300,
        searching: true,
        scrollX: true
    });
    // adding html to table
    $('.dataTables_filter label').append(' <button class="sm-search"><img src="asset/image/search.png" alt=""></button>', '<a class="add-new" href="#">New</a>');
    $('.dataTables_wrapper .row .col-md-6').addClass("col-md-12");
    $(".table-cnt").css("width", "100%");
    $(".dataTables_scrollHeadInner").css("width", "100%");
    if ($(window).width() <= 1200) {
        $(".table-cnt").css("width", "1150px");
        $(".dataTables_scrollHeadInner").css("width", "1150px");
    }
    $( ".inputs").spinner({
        max: 50
      });
})