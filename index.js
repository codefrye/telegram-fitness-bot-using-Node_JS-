const TelegramBot = require('node-telegram-bot-api')
var fs = require('fs');

require('dotenv').config()
const token = process.env.token;

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (message) => {
    console.log(message)
    console.log(message.text)
    let chatid = message.from.id;

    if (message.text === '/start') {
        let msg = `Hey there, human! I'm your workout woof on Telegram. Let's cut to the chase: Are we chasing the /weightloss tail, sniffing out gains with /weightgain, or are you the mystery Mr. or Ms. I-dont-know, all about that 💪/stronger life? Perhaps you're feeling agile, ready to groove into 🤸‍♂️🤸‍♀️/fit territory? Or maybe you're just itching for some paw-some /workingout action. Time to unleash the fitness beast within! 🐾🏋️‍♂️`
        console.log(msg)
        bot.sendMessage(chatid, msg)
    }
    if (message.text === '/weightloss') {
        let msg = `
        "Alright, nerd! Time to unravel the mysteries of weight loss. Calories are like the nerdy mathematicians calculating your body's energy equation. Now, with /weightloss, we're venturing into deficit territory. It's like hacking into your stored energy, burning fat like a coding genius. Use apps like MyFitnessPal to decode the numbers. Oh, and for my fellow nerds, check this out: [Nerdy Fat Loss Study](https://pubmed.ncbi.nlm.nih.gov/18025815/). When it's /workingout time, think heart-pounding cardio, smart eating, and let's hack that lean physique! 🔥💦🤓"`

        bot.sendMessage(chatid, msg)
    }
    if (message.text === '/weightgain') {
        let msg = `"Alright, nerd! Let's geek out on gains. Calories are your body's energy units – think of them as the nerdy coders powering up your muscles. Now, with /weightgain, we're diving into surplus mode. You're stacking up more calories than you burn, a bit like hoarding extra loot for your muscle kingdom. To track this epic quest, use apps like MyFitnessPal. Oh, and for my fellow nerds out there, check this research out: [Nerdy Gains Study](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6710320/). When it's /workingout time, think heavy lifting, epic feasting, and let's level up those gains! 💪🍔🤓"
        
        Feel free to adjust the tone based on the desired vibe, and remember, it's all about making fitness fun and relatable!`

        bot.sendMessage(chatid, msg)
    }

    if (message.text === '/workingout') {
        let msg = `Awesome decision to dive into the realm of exercising, human! So spill the kibble: Are you all about the iron jungle at the /gym, or are you rocking the fur-friendly vibes with a /home workout den? Or maybe you're the wild spirit hitting the outdoors, conquering the fitness terrain at the /park? Let's tailor your fitness playground – where's the Muscle Dog guiding you today? 🏋️‍♂️🏡🌳 `
        console.log(msg)
        bot.sendMessage(chatid, msg)
    }
    if (message.text === '/stronger'){
        let msg= `Yo, powerhouse! 💪 Muscle Dog senses a hunger for pure strength. Ready to dive into the iron jungle at the /gym, or perhaps you're building an epic home gym at /home? Maybe you're the mighty warrior conquering the strength frontier at the /park? Wherever your journey leads, let's forge that strength, human! 🏋️‍♂️🏡🌳 Muscle Dog's got your back – time to unleash the inner beast and get seriously /stronger! `
       
        bot.sendMessage(chatid,msg)
    }

    if (message.text === '/fit') {
        let msg = `Yo, fitness trailblazer! Major props for stepping into the world of gains! 🐾 Time to spill the kibble: Are you throwing down in the iron jungle at the /gym, or do you vibe with the fur-friendly setup at /home? Maybe you're the wild spirit conquering the fitness frontier at the /park? Let's sculpt your fitness realm – where's Muscle Dog guiding you today? 🏋️‍♂️🏡🌳 Let's fetch those gains, human! 🐶💪 `
       
        bot.sendMessage(chatid, msg)
    }


    if (message.text === '/gym') {
        let msg = `Alright, human! So, you've got the golden key to the iron jungle – that's pawsitively great! Sniff out this beginners' full-body workout guide plan from https://www.muscleandstrength.com/. Follow it for 12 weeks, and you'll be barking up the right fitness tree. If boredom creeps in, that website's like a treasure trove with millions of plans to keep things interesting. Remember, steer clear of all the junk food, load up on protein-rich goodies, and don't forget to hydrate like a champ. Let's unleash the gains, one workout at a time! 🏋️‍♂️🐾💦 `

        const documentPath = './assets/12weekfullbodyworkoutroutineforbeginners.pdf';
        bot.sendDocument(chatid, fs.createReadStream(documentPath))
            .then(sent => {
                console.log('Document sent successfully:', sent.document.file_id);
            })
            .catch(error => {
                console.error('Error sending document:', error);
            });
        bot.sendMessage(chatid, msg)
    }
    if (message.text === '/home') {
        let msg = `Yo, human! No gym, no sweat – Muscle Dog's got your fitness fix! Dive into this beginner's full-body workout plan at https://www.muscleandstrength.com/. Stick with it for a solid 8 weeks, and you'll be flexing like a pro. Feeling the yawns? Hit up that site for a gazillion more plans to keep it exciting. Remember to dodge the junk, chow down on protein-packed treats, and gulp down that aqua goodness daily. Time to fetch those fitness gains – Muscle Dog style! 🐾💪💦 `

        const documentPath = './assets/5_5_hit3training8weekmusclebuildingprogram.pdf';
        bot.sendDocument(chatid, fs.createReadStream(documentPath))
            .then(sent => {
                console.log('Document sent successfully:', sent.document.file_id);
            })
            .catch(error => {
                console.error('Error sending document:', error);
            });
        bot.sendMessage(chatid, msg)
    }
    if (message.text === '/park') {
        let msg = `Yo, fitness adventurer! Ready to turn that park into your personal playground? Muscle Dog's got the ultimate trick up his furry sleeve – it's called calisthenics, the art of bodyweight wizardry! 🏞️✨ Dive into the epic world of gains with this beginners' full-body workout guide plan at https://thefitnessphantom.com/. Commit to the journey for a solid 12 weeks, and you'll be sculpting those muscles like a workout maestro. Feeling the boredom creeping in? No worries – that site's a treasure trove with millions of plans to keep the thrill alive. Remember, dodge the junk, feast on protein-packed delights, and hydrate like a fitness fiend. Time to own that park, one epic calisthenics move at a time! 🐾💪💦 `

        const documentPath = './assets/Calisthenics-Workout-Plan-Intermediate-PDF.pdf';
        bot.sendDocument(chatid, fs.createReadStream(documentPath))
            .then(sent => {
                console.log('Document sent successfully:', sent.document.file_id);
            })
            .catch(error => {
                console.error('Error sending document:', error);
            });
        bot.sendMessage(chatid, msg)
    }
})