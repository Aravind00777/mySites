$(document).ready(function () {
    $('#nav-burger').click(function () {
        $(this).toggleClass('open')
        $('.collapse:not(.show)').toggleClass('active')
    })
    // aos 

    AOS.init();

    // owl carousel 
    $('.owl-carousel.film-image-blk').owlCarousel({
        loop: true,
        margin: 16,
        autoplay: true,
        navSpeed: 5000,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });

    // get currrent year in footer 
    var currentYear = new Date().getFullYear();
    $("#currentYear").text(currentYear);

    // scroll to second section 
    $(".btn-click").on("click", function (event) {
        event.preventDefault();
        var target = $(this).attr("href");
        var headerHeight = $("header").outerHeight();
        $("html, body").animate({
            scrollTop: $(target).offset().top - headerHeight
        }, 1000);
    });

    // card flip 
    $('.flip-btn').click(function (ev) {
        ev.preventDefault();
        $(this).parents("#flip-card").toggleClass('do-flip');
    });

    // scroll to section on click 
    $('.nav-link').on('click', function (e) {
        e.preventDefault();
        // $(".nav-link").removeClass("active");
        var headerHeight = $("header").outerHeight();
        var targetId = $(this).attr('href');
        var targetPosition = $(targetId).offset().top - headerHeight;
        // $(this).addClass("active");
        $('html, body').animate({
            scrollTop: targetPosition

        }, 1000);
        if ($(window).width() < 992) {
            $("#nav-burger").trigger("click");
        }
    });

    // highlight nav-link on scroll 
    $(window).on('scroll', function () {
        highlightNavLink();
    });

    // video play on button click  
    $(".play-btn").click(function (ev) {
        ev.preventDefault();
        var video = $(this).parent().siblings(".video-clip")[0];
        $(this).parent().hide();
        $(this).parent().siblings(".sm-video-bg-img").hide();
        if (video.paused) {
            video.play();

        } else {
            video.pause();
        }
    })

})

// nav link highlight function 
function highlightNavLink() {

    var currentPosition = $(window).scrollTop();
    $('section').each(function () {
        var sectionTop = $(this).offset().top;
        var headerHeight = $("header").height();
        var sectionBottom = sectionTop + $(this).outerHeight();
        var sectionId = $(this).attr('id');
        var navLink = $('nav a.nav-link[href="#' + sectionId + '"]');

        if (currentPosition >= sectionTop - headerHeight && currentPosition < sectionBottom) {
            navLink.addClass('active');
        } else {

            navLink.removeClass('active');
        }
    });
}

// audio player 

document.addEventListener('DOMContentLoaded', function () {
    // Select all audio player elements on the page
    const audioPlayers = document.querySelectorAll('.green-audio-player');

    audioPlayers.forEach((audioPlayer) => {
        // Find elements within the current audio player
        const playPause = audioPlayer.querySelector('.play-pause-btn');
        const loading = audioPlayer.querySelector('.loading');
        const progress = audioPlayer.querySelector('.progress');
        const sliders = audioPlayer.querySelectorAll('.slider');
        const volumeBtn = audioPlayer.querySelector('.volume-btn');
        const volumeControls = audioPlayer.querySelector('.volume-controls');
        const volumeProgress = volumeControls.querySelector('.slider .progress');
        const player = audioPlayer.querySelector('audio');
        const currentTime = audioPlayer.querySelector('.current-time');
        const totalTime = audioPlayer.querySelector('.total-time');
        const speaker = audioPlayer.querySelector('#speaker');

        // Variables for dragging the sliders
        let draggableClasses = ['pin'];
        let currentlyDragged = null;

        // Event listener for mouse down to enable slider dragging
        window.addEventListener('mousedown', function (event) {
            if (!isDraggable(event.target)) {
                return false;
            }

            currentlyDragged = event.target;
            let handleMethod = currentlyDragged.dataset.method;

            this.addEventListener('mousemove', window[handleMethod], false);

            window.addEventListener('mouseup', () => {
                currentlyDragged = false;
                window.removeEventListener('mousemove', window[handleMethod], false);
            }, false);
        });

        // Event listener for the play/pause button
        playPause.addEventListener('click', togglePlay);

        // Event listener for the time update of the audio
        player.addEventListener('timeupdate', updateProgress);

        // Event listener for volume change
        player.addEventListener('volumechange', updateVolume);

        // Event listener for loaded metadata of the audio
        player.addEventListener('loadedmetadata', () => {
            totalTime.textContent = formatTime(player.duration);
        });

        // Event listener for canplay event
        player.addEventListener('canplay', makePlay);

        // Event listener for audio ended
        player.addEventListener('ended', function () {
            playPause.querySelector('path').setAttribute('d', 'M18 12L0 24V0');
            player.currentTime = 0;
        });

        // Event listeners for slider click events
        sliders.forEach(slider => {
            let pin = slider.querySelector('.pin');
            slider.addEventListener('click', window[pin.dataset.method]);
        });

        // Event listener for volume button click
        volumeBtn.addEventListener('click', toggleVolume);

        // Event listener for volume slider click
        volumeControls.addEventListener('click', changeVolume);

        function isDraggable(el) {
            let canDrag = false;
            let classes = Array.from(el.classList);
            draggableClasses.forEach(draggable => {
                if (classes.indexOf(draggable) !== -1)
                    canDrag = true;
            })
            return canDrag;
        }

        function inRange(event) {
            let rangeBox = getRangeBox(event);
            let rect = rangeBox.getBoundingClientRect();
            let direction = rangeBox.dataset.direction;
            if (direction == 'horizontal') {
                var min = rect.left;
                var max = min + rangeBox.offsetWidth;
                if (event.clientX < min || event.clientX > max) return false;
            } else {
                var min = rect.top;
                var max = min + rangeBox.offsetHeight;
                if (event.clientY < min || event.clientY > max) return false;
            }
            return true;
        }

        function updateProgress() {
            var current = player.currentTime;
            var percent = (current / player.duration) * 100;
            progress.style.width = percent + '%';

            currentTime.textContent = formatTime(current);
        }

        function updateVolume() {
            volumeProgress.style.width = player.volume * 100 + '%';
            if (player.volume >= 0.5) {
                speaker.querySelector('path').setAttribute('d', 'M14.667 0v2.747c3.853 1.146 6.666 4.72 6.666 8.946 0 4.227-2.813 7.787-6.666 8.934v2.76C20 22.173 24 17.4 24 11.693 24 5.987 20 1.213 14.667 0zM18 11.693c0-2.36-1.333-4.386-3.333-5.373v10.707c2-.947 3.333-2.987 3.333-5.334zm-18-4v8h5.333L12 22.36V1.027L5.333 7.693H0');
            } else if (player.volume < 0.5 && player.volume > 0.05) {
                speaker.querySelector('path').setAttribute('d', 'M0 7.667v8h5.333L12 22.333V1L5.333 7.667M17.333 11.373C17.333 9.013 16 6.987 14 6v10.707c2-.947 3.333-2.987 3.333-5.334z');
            } else if (player.volume <= 0.05) {
                speaker.querySelector('path').setAttribute('d', 'M0 7.667v8h5.333L12 22.333V1L5.333 7.667');
            }
        }

        function getRangeBox(event) {
            let rangeBox = event.target;
            let el = currentlyDragged;
            if (event.type == 'click' && isDraggable(event.target)) {
                rangeBox = event.target.parentElement.parentElement;
            }
            if (event.type == 'mousemove') {
                rangeBox = el.parentElement.parentElement;
            }
            return rangeBox;
        }

        function getCoefficient(event) {
            let slider = getRangeBox(event);
            let rect = slider.getBoundingClientRect();
            let K = 0;
            if (slider.dataset.direction == 'horizontal') {
                let offsetX = event.clientX - rect.left;
                let width = slider.clientWidth;
                K = offsetX / width;
            } else if (slider.dataset.direction == 'vertical') {

                let height = slider.clientHeight;
                var offsetY = event.clientY - rect.top;
                K = 1 - offsetY / height;
            }
            return K;
        }

        function rewind(event) {
            if (inRange(event)) {
                player.currentTime = player.duration * getCoefficient(event);
            }
        }

        function changeVolume(event) {
            if (inRange(event)) {
                // Calculate the new volume level based on event position
                const newPosition = event.clientX - volumeControls.getBoundingClientRect().left;
                const newVolume = newPosition / volumeControls.offsetWidth;

                // Set the audio's volume
                player.volume = newVolume;

                // Update the pin's position
                const pin = volumeControls.querySelector('.pin');
                pin.style.left = newPosition + 'px';
            }
        }

        function formatTime(time) {
            var min = Math.floor(time / 60);
            var sec = Math.floor(time % 60);
            return min + ':' + ((sec < 10) ? ('0' + sec) : sec);
        }

        function togglePlay() {
            if (player.paused) {
                playPause.querySelector('path').setAttribute('d', 'M0 0h6v24H0zM12 0h6v24h-6z');
                player.play();
            } else {
                playPause.querySelector('path').setAttribute('d', 'M18 12L0 24V0');
                player.pause();
            }
        }

        function toggleVolume() {
            if (player.volume > 0) {
                lastVolume = player.volume;
                player.volume = 0;
            } else {
                player.volume = lastVolume;
            }
        }

        function makePlay() {
            playPause.style.display = 'block';
            loading.style.display = 'none';
        }
    });
});

