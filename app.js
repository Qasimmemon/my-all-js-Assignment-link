var assignmentsArray = [
    {
      title: "Attendence sheet",
      code: "https://github.com/Qasimmemon/js",
      link: "https://qasimmemon.github.io/js/",
      date: "24-May-2024",
      description: "Make Attendence sheet.",
    },
    {
      title: "Birth calculte",
      code: "https://github.com/Qasimmemon/birth-calculate",
      link: "https://qasimmemon.github.io/birth-calculate/",
      date: "18-May-2024",
      description:
        "Make Birth Calculator using Date function",
    },
    {
      title: "Head & Tail",
      description: "Make Head & Tail Game",
      code: "https://github.com/Qasimmemon/js_",
      link: "https://qasimmemon.github.io/js_/",
      date: "20-May-2024",
    },
    
    {
      title: "Text Editor",
      code: "https://github.com/Qasimmemon/now",
      link: "https://qasimmemon.github.io/now/",
      date: "18-May-2024",
      description:
        "Make Text editor using DOM",
    },


    {
      title: "Color picker",
      code: "https://github.com/Qasimmemon/color",
      link: "https://qasimmemon.github.io/color/",
      date: "18-May-2024",
      description:
        "A color changer Use addEventListner!",
    },
    {
      title: "Finance Tracking Application",
      code: "https://github.com/Qasimmemon/financr",
      link: "https://qasimmemon.github.io/financr/",
      date: "23-May-2024",
      description:
        "Using Input and Table Show Data!",
    },
    {
      title: "chapter 13",
      code: "https://github.com/Qasimmemon/j-s",
      link: "https://qasimmemon.github.io/j-s/",
      date: "21-Feb-2024",
      description:
        "All Variable Practice and ifelse Some Thing!",
    },
    {
      title: "Dice Game",
      code: "https://github.com/Qasimmemon/dic",
      link: "https://qasimmemon.github.io/dic/",
      date: "29-Apr-2024",
      description:
        "A Dice Game Using Function!",
    },
    {
      title: "Image Gallery",
      code: "https://github.com/Qasimmemon/new1",
      link: "https://qasimmemon.github.io/new1/",
      date: "14-May-2024",
      description:
        "Using addEventListner with DOM!",
    },
    {
      title: "Calculator",
      code: "https://github.com/Qasimmemon/calculatoR-",
      link: "https://qasimmemon.github.io/calculatoR-/",
      date: "14-May-2024",
      description:
        "A Calculator Using Function!",
    },
    {
      title: "For Each use",
      code: "https://github.com/Qasimmemon/for-each",
      link: "https://qasimmemon.github.io/for-each/",
      date: "14-May-2024",
      description:
        "A Website Using For Each!",
    },
    {
      title: "Todo With Local Storage",
      code: "https://github.com/Qasimmemon/local-storage",
      link: "https://qasimmemon.github.io/local-storage/",
      date: "14-May-2024",
      description:
        "Todo Save local Storage!",
    },
    {
      title: "Search Product With Filter ",
      code: "https://github.com/Qasimmemon/filter",
      link: "https://qasimmemon.github.io/filter/",
      date: "14-May-2024",
      description:
        "A Simple Page And Search product and Filter!",
    },
    

    
  ];
  
  var assignList = document.getElementById("all-assignments");
  
  for (var i = 0; i < assignmentsArray.length; i++) {
    var div = ` <div class="p-4 md:w-1/3">
    <div
      class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
     
    >
      <div class="p-6" >
        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
         ${assignmentsArray[i].title} 
        </h1>
        <p>${assignmentsArray[i].date}</p>
        <p class="leading-relaxed mb-3">${assignmentsArray[i].description}</p>
        <div class="flex items-center flex-wrap">
          <a
          target="_blank"
            href="${assignmentsArray[i].link}"
            class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
            >Github link
            </svg>
          </a>
          <span
            class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"
          >
            <a
            target="_blank"
              href="${assignmentsArray[i].code}"
            >
              Github code
            </a>
          
        </div>
      </div>
    </div>
  </div>`;
  
    assignList.innerHTML += div;
  }
  
  
