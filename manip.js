

document.getElementById('entLink').addEventListener('click', () => {
    window.location.href = 'entertainment.html';
})
document.getElementById('fooLink').addEventListener('click', () => {
    window.location.href = 'food.html';
})
document.getElementById('traLink').addEventListener('click', () => {
    window.location.href = 'transportation.html';
})
document.getElementById('lodLink').addEventListener('click', () => {
    window.location.href = 'lodgeHotels.html';
})
try {
    document.getElementById('bookNow').addEventListener('click', () => {
    window.location.href = 'lodgeHotels.html';
})
} catch (error) {
   console.log(error);
    
}

try {
    document.getElementById('db_button').addEventListener('click', () => {
        // var connection = mysql.createConnection({
        //   host     : process.env.DB_HOST,
        //   user     : process.env.DB_USER,
        //   password : process.env.DB_PW
        // });

        // connection.connect(function(err) {
        //     if (err) {
        //         console.error('error connecting: ' + err.stack);
        //         return;
        //     }

        //     console.log('connected as id ' + connection.threadId);
        //     connection.query("SELECT * FROM testcf.testTable", (err, result, fields) => {
        //         if (err) {
        //             console.log(err.stack);
        //             return;
        //         } 
        //         console.log(result);
        //         document.getElementById("result_field").innerHTML = result;
        //     })

        // });

        fetch('http://localhost:8000/qTest')
        .then(response => {
            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // or response.text(), depending on your server response
        })
        .then(data => {
            console.log('Received:', data);
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
    
    })
} catch (error) {
   console.log(error);
    
}

for (let i = 1; i < 8; i ++) {

    try {
        document.getElementById(`faq${i}`).firstElementChild.addEventListener('click', () => {
            if (document.getElementById(`faq${i}`).children[1].style.display == 'block') {
                document.getElementById(`faq${i}`).children[1].style.animation = 'slideInFromOut 0.25s forwards ease-out'
                document.getElementById(`faq${i}`).children[1].addEventListener('animationend', () => {
                    document.getElementById(`faq${i}`).children[1].style.display = 'none'; 
                }, { once:true });
                console.log('going back in');
                
            } else {
                document.getElementById(`faq${i}`).children[1].style.display = 'block'
                document.getElementById(`faq${i}`).children[1].style.animation = 'slideOutFromUnder 0.25s forwards ease-out'
            }
            
        })
    } catch (error) {
    console.log(error);
        
    }

}

document.getElementById('faqLink').addEventListener('click', () => {
    window.location.href = 'faqs.html';
})
document.getElementById('conLink').addEventListener('click', () => {
    window.location.href = 'contact.html';
})
document.getElementById('headerText').addEventListener('click', () => {
    window.location.href = "index.html";
})

try {
    document.getElementById('nextImage').addEventListener('click', () => {
    let styles = window.getComputedStyle(document.getElementById('imageCard'));
    let image = styles.backgroundImage
    let strParts = image.split("island")
    let num = parseInt(strParts[1][1])
    num += 1
    if (num > 5) {
        num = 1
    }
    document.getElementById('imageCard').style.backgroundImage = `url(images/island-${num}.jpg)`
    changeInfoCard(num)
    
})
} catch (error) {
    console.log(error);
}

try {
    document.getElementById('prevImage').addEventListener('click', () => {
    let styles = window.getComputedStyle(document.getElementById('imageCard'));
    let image = styles.backgroundImage
    let strParts = image.split("island")
    let num = parseInt(strParts[1][1])
    num -= 1
    if (num < 1) {
        num = 5
    }
    document.getElementById('imageCard').style.backgroundImage = `url(images/island-${num}.jpg)`
    changeInfoCard(num)
})
} catch (error) {
    console.log(error);
    
}

try {
    document.getElementById('homeInfoBtn').addEventListener('click', () => {
    let pageToSwitch = document.getElementById('homeInfoBtn').innerHTML
    
    switch (pageToSwitch) {
        case 'FAQs':
            window.location.href = 'faqs.html';
            break;
        case 'Find Activities':
            window.location.href = 'entertainment.html';
            break;
        case 'Find Food':
            window.location.href = 'food.html';
            break;
        case 'Find island-Travel':
            window.location.href = 'transportation.html';
            break;
        case 'Available Hotels/Lodges':
            window.location.href = 'lodgeHotels.html';
            break;
        
        
    }
    
})
} catch (error) {
    console.log(error);
    
}


function changeInfoCard(num) {
    switch (num) {
        case 1:
            document.getElementById('homeInfoHeader').innerHTML = "Welcome!"
            document.getElementById('homeInfoP').innerHTML = "Taniti is a small, tropical island in the Pacific. While the island has an area of less than 500 square miles, the terrain is varied and includes both sandy and rocky beaches, a small but safe harbor, lush tropical rainforests, and a mountainous interior that includes a small, active volcano. Taniti has an indigenous population of about 20,000. Until a recent increase in tourism, most the Tanitian economy was dominated by fishing or agriculture.";
            document.getElementById('homeInfoBtn').innerHTML = "FAQs"
            break;
        case 2:
            document.getElementById('homeInfoHeader').innerHTML = "Entertainment"
            document.getElementById('homeInfoP').innerHTML = "Most people visit Taniti to enjoy the beaches, explore the rainforest, and to visit the volcano. However, there are other things to do, including visiting a local history museum, going on chartered fishing tours, snorkeling, zip-lining in the rainforest, visiting several pubs, including a microbrewery, dancing at a new dance club, seeing a movie, taking helicopter rides, playing at an arcade, visiting art galleries, and bowling. Also, a nine-hole golf course should be operational by next year. Many of these activities are located in Merriton Landing, which is a rapidly developing area on the north side of Yellow Leaf Bay. ";
            document.getElementById('homeInfoBtn').innerHTML = "Find Activities"
            break;
        case 3:
            document.getElementById('homeInfoHeader').innerHTML = "Food"
            document.getElementById('homeInfoP').innerHTML = "Taniti currently has 10 restaurants: five serve mostly local fish and rice, three serve American-style meals, and two serve Pan-Asian cuisine.<br><br> Taniti has two supermarkets, two smaller grocery stores, and one convenience store that is open 24 hours a day.";
            document.getElementById('homeInfoBtn').innerHTML = "Find Food"
            break;
        case 4:
            document.getElementById('homeInfoHeader').innerHTML = "Transportation"
            document.getElementById('homeInfoP').innerHTML = "Almost all visitors arrive to Taniti by air, though some arrive on a small cruise ship that docks in Yellow Leaf Bay for one night per week. Taniti is served by a small airport that can accommodate small jets and propeller planes. Taniti is in the process of expanding the airport so larger jets will be able to land on the island within the next few years. ";
            document.getElementById('homeInfoBtn').innerHTML = "Find island-Travel"
            break;
        case 5:
            document.getElementById('homeInfoHeader').innerHTML = "Lodging/Hotels"
            document.getElementById('homeInfoP').innerHTML = "Taniti has a wide variety of lodging that ranges from an inexpensive hostel to one large, four-star resort. There are many small, family-owned hotels and a growing number of bed and breakfasts. All types of lodging are strictly regulated and regularly inspected by the Tanitian government.";
            document.getElementById('homeInfoBtn').innerHTML = "Available Hotels/Lodges"
            break;
    
    }
}