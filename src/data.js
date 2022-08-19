try{


    console.log('hello')
    const wrapper = document.querySelector(".wrapper");
    const header = document.querySelector(".header");
    
    wrapper.addEventListener("scroll", (e) => {
     e.target.scrollTop > 30
      ? header.classList.add("header-shadow")
      : header.classList.remove("header-shadow");
    });
    
    const toggleButton = document.querySelector(".dark-light");
    
    toggleButton.addEventListener("click", () => {
     document.body.classList.toggle("dark-mode");
    });
    
    const jobCards = document.querySelectorAll(".job-card");
    const logoo = document.querySelector(".logo");
    const jobLogos = document.querySelector(".job-logos");
    const jobDetailTitle = document.querySelector(
     ".job-explain-content .job-card-title"
    );
    const jobBg = document.querySelector(".job-bg");
    const jobDetailOverview = document.querySelector(
      ".overview-text-subheader"
     );
    
    jobCards.forEach((jobCard) => {
     jobCard.addEventListener("click", () => {
      const number = Math.floor(Math.random() * 10);
      const url = `https://unsplash.it/640/425?image=${number}`;
      jobBg.src = url;
    
      const title = jobCard.querySelector(".job-card-title");
      jobDetailTitle.textContent = title.textContent;
    
      jobLogos.innerHTML = logo.outerHTML;
    
      const data = jobCard.querySelector(".job-card-subtitle");
      console.log(data.textContent)
      jobDetailOverview.textContent = data.textContent
    
    
      wrapper.classList.add("detail-page");
      wrapper.scrollTop = 0;
      
     });
    });
    
    logo.addEventListener("click", () => {
     wrapper.classList.remove("detail-page");
     wrapper.scrollTop = 0;
    });
    }
    catch(e){
      console.log(e.message)
    }