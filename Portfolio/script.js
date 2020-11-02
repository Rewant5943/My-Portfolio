$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    
    //slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto"); 
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //typing animation script
    var typed = new Typed(".typing-2",{
        strings: ["Software Developer","Python Developer","Web Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing",{
        strings: ["Software Developer","Python Developer","Web Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    });

    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true
    });
    
    /*SCROLL HOME*/
    sr.reveal('.home-content',{}); 
    sr.reveal('.hire',{delay: 200}); 
    sr.reveal('.home .home-link',{delay: 400}); 

    
    /*SCROLL ABOUT*/
    sr.reveal('.about .title',{}); 
    sr.reveal('.about-content .left',{delay: 400}); 
    sr.reveal('.about-content .right .text',{delay: 400}); 
    sr.reveal('.about-content .right p',{delay: 600}); 


    /* Scroll  Education*/
    sr.reveal('.education .title',{}); 
    sr.reveal('.education_content .left .education_year',{delay: 200}); 
    sr.reveal('.education_content .left .education_university',{delay: 400}); 
    sr.reveal('.education_content .left .education_percentage',{ interval: 200});

    sr.reveal('.education_content .right .education_race',{delay: 200}); 
    sr.reveal('.education_content .right .education_institute',{delay: 400});
    
    /*SCROLL Skills*/
    sr.reveal('.skills .title',{}); 
    sr.reveal('.skills .skills-content .left',{}); 
    sr.reveal('.skills .skills-content .left .text',{interval: 200}); 
    sr.reveal('.skills .skills-content .left img',{delay: 600});

    sr.reveal('.skills .skills-content .right',{}); 
    sr.reveal('.skills .skills-content .right .bars',{interval: 200}); 
    sr.reveal('.skills .skills-content .right .info',{delay: 600});


    /*SCROLL Services*/
    sr.reveal('.services .title',{}); 
    sr.reveal('.services .serv-content .card',{}); 
    sr.reveal('.services .serv-content .box',{interval: 200});


    /*SCROLL Project*/
    sr.reveal('.projects .title',{}); 
    sr.reveal('.projects .project-detail .card',{}); 
    sr.reveal('.projects .project-detail .box',{interval: 200});
    sr.reveal('.projects .project-detail .voice',{}); 
    sr.reveal('.projects .project-detail .snake',{delay: 200});
    sr.reveal('.projects .project-detail .e-learning',{interval: 200});
    
    
    
    /*SCROLL CONTACT*/
    sr.reveal('.contact .title',{});
    sr.reveal('.contact .contact-content .left .text',{delay: 200});
    sr.reveal('.contact .contact-content .left p',{delay: 200});
    sr.reveal('.contact .contact-content .left .icons .rows i',{interval: 400});
    sr.reveal('.contact .contact-content .left .icons .info',{interval: 400});

    sr.reveal('.contact .contact-content .right .text',{delay: 200}); 
    sr.reveal('.contact .contact-content .right form .name',{interval: 200});

    sr.reveal('.contact .contact-content .right form .email',{delay: 200}); 
    sr.reveal('.contact .contact-content .right form .subject',{interval: 200});

    sr.reveal('.contact .contact-content .right form .textarea',{delay: 200}); 
    sr.reveal('.contact .contact-content .right form .button',{interval: 400});
    sr.reveal('.contact .contact-content .right form .button-2',{delay: 200});

});