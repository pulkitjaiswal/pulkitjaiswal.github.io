//mac();

function mac(){
setTimeout(welcome,3000);

}


$('#disk_icon').click(function(){
	$(this).attr("src", "images/disk_h.png");
});

function welcome(){
$('#welcome').show();
}

$('.icon').draggable({
	containment: "parent",
});

$(document).mouseup(function (e)
{
    var container = $("#disk_icon");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        $('#disk_icon').attr("src", "images/disk.png");
    }
});

$('#instagram_icon').click(function(){
	$(this).attr("src", "images/instagram_h.png");
});

$('#instagram_icon').dblclick(function(){
	window.open("http://instagram.com/pulkitjaiswal",'_blank');
});
$(document).mouseup(function (e)
{
    var container = $("#instagram_icon");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        $('#instagram_icon').attr("src", "images/instagram.png");
    }
});

$('#location_icon').click(function(){
	$(this).attr("src", "images/location_h.png");
});

$('#location_icon').dblclick(function(){
	window.open("http://foursquare.com/pulkitjaiswl",'_blank');
});

$(document).mouseup(function (e)
{
    var container = $("#location_icon");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        $('#location_icon').attr("src", "images/location.png");
    }
});

$('#blog_icon').click(function(){
	$(this).attr("src", "images/blog_h.png");
});

$('#blog_icon').dblclick(function(){
	window.open("http://pulkitjaiswal.github.io/blog",'_blank');
});

$(document).mouseup(function (e)
{
    var container = $("#blog_icon");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        $('#blog_icon').attr("src", "images/blog.png");
    }
});

$('#email_icon').click(function(){
	$(this).attr("src", "images/email_h.png");
});

$('#email_icon').dblclick(function(){
	window.open("mailto:pulkit@garuda.io");
});
$(document).mouseup(function (e)
{
    var container = $("#email_icon");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        $('#email_icon').attr("src", "images/email.png");
    }
});

$('#github_icon').click(function(){
	$(this).attr("src", "images/github_h.png");
});

$('#github_icon').dblclick(function(){
	window.open("http://github.com/pulkitjaiswal",'_blank');
});

$(document).mouseup(function (e)
{
    var container = $("#github_icon");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        $('#github_icon').attr("src", "images/github.png");
    }
});

$('#linkedin_icon').click(function(){
	$(this).attr("src", "images/linkedin_h.png");
});

$('#linkedin_icon').dblclick(function(){
	window.open("http://linkedin.com/in/pulkitjaiswal",'_blank');
});

$(document).mouseup(function (e)
{
    var container = $("#linkedin_icon");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        $('#linkedin_icon').attr("src", "images/linkedin.png");
    }
});

$('.open #apple-menu-icon').attr("src",'images/apple-logo_h.png');

$(function() {
    var BV = new $.BigVideo();
    BV.init();
    BV.show('http://vimeo.com/8977355/download?t=1385794044&v=14750424&s=cfc0f7e19125a85c163d981f35856419');
});
