const mineflayer = require('mineflayer');
const express = require('express');
const app = express();

// سيرفر وهمي للحفاظ على استمرارية البوت
app.get('/', (req, res) => res.send('البوت يعمل 24 ساعة!'));
app.listen(3000, () => console.log('السيرفر الوهمي جاهز'));

function startBot() {
    const bot = mineflayer.createBot({
        host: 'il_goku.aternos.me', // عنوان سيرفرك
        port: 52134,                // بورت سيرفرك الخاص
        username: 'AFK_Bot_247',    // اسم البوت داخل اللعبة
        version: '1.21.1'           // إصدار السيرفر الخاص بك
    });

    bot.on('spawn', () => {
        console.log('تم دخول البوت بنجاح إلى السيرفر الخاص بك!');
    });

    // إعادة الاتصال التلقائي في حال تم طرد البوت أو انطفأ السيرفر
    bot.on('end', () => {
        console.log('انقطع الاتصال. جاري إعادة المحاولة بعد 30 ثانية...');
        setTimeout(startBot, 30000);
    });

    bot.on('error', (err) => console.log('خطأ في البوت:', err));
}

startBot();
