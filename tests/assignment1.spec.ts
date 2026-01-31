import { test, expect } from '@playwright/test';

// -----------------------------------------------------------------------
// DATA SET 1
// -----------------------------------------------------------------------
const testCases = [
  { id: 'Pos_Fun_0001', input: 'Iniye kaalai vanakkam nanba', expected: 'இனிய காலை வணக்கம் நண்பா' },
  { id: 'Pos_Fun_0002', input: 'Indha project romba mukiyam', expected: 'இந்த project ரொம்ப முக்கியம்' },
  { id: 'Pos_Fun_0003', input: 'Chennai ku poga ticket kidaikuma?', expected: 'சென்னைக்கு போக ticket கிடைக்குமா?' },
  { id: 'Pos_Fun_0004', input: 'Ippo mani enna aachu?', expected: 'இப்போ மணி என்ன ஆச்சு?' },
  { id: 'Pos_Fun_0005', input: 'Kaigalai nalla kazhuvu', expected: 'கைகளை நல்லா கழுவு' },
  { id: 'Pos_Fun_0006', input: 'Indha unavu enaku pidikavillai', expected: 'இந்த உணவு எனக்கு பிடிக்கவில்லை' },
  { id: 'Pos_Fun_0007', input: 'Veyil adithathu aanal mazhai peiyala', expected: 'வெயில் அடித்தது ஆனால் மழை பெய்யல' },
  { id: 'Pos_Fun_0008', input: 'Nee vandhal mattum naan varuven', expected: 'நீ வந்தால் மட்டும் நான் வருவேன்' },
  { id: 'Pos_Fun_0009', input: 'Avanga oorukku poitanga', expected: 'அவங ஊருக்கு போயிட்டாங்க' },
  { id: 'Pos_Fun_0010', input: 'Naalai paritchai ezhudhuven', expected: 'நாளை பரீட்சை எழுதுவேன்' },
  { id: 'Pos_Fun_0011', input: 'Siruvargal poongavil vilaiyadinar', expected: 'சிறுவர்கள் பூங்காவில் விளையாடினர்' },
  { id: 'Pos_Fun_0012', input: 'Ungalukku udhavi thevaiya?', expected: 'உங்களுக்கு உதவி தேவையா?' },
  { id: 'Pos_Fun_0013', input: 'Machan padam semaya iruku', expected: 'மச்சான் படம் செமையா இருக்கு' },
  { id: 'Pos_Fun_0014', input: 'Enoda laptop on aaga matengudhu', expected: 'என்னோட laptop on ஆக மாட்டேங்குது' },
  { id: 'Pos_Fun_0015', input: 'Meeting room book panniyachu', expected: 'மீட்டிங் ரூம் புக் பண்ணியாச்சு' },
  { id: 'Pos_Fun_0016', input: 'Vandi number 8055', expected: 'வண்டி number 8055' },
  { id: 'Pos_Fun_0017', input: 'Indru Gandhi Jayanthi', expected: 'இன்று காந்தி ஜெயந்தி' },
  { id: 'Pos_Fun_0018', input: 'Rail vegama sellum', expected: 'ரயில் வேகமா செல்லும்' },
  { id: 'Pos_Fun_0019', input: 'Shirt vilai 750 rubaai', expected: 'ஷர்ட் விலை 750 ரூபாய்' },
  { id: 'Pos_Fun_0020', input: 'En kitta Sony camera iruku', expected: 'என் கிட்ட Sony camera இருக்கு' },
  { id: 'Pos_Fun_0021', input: 'Aiyo!! Valikudhu...', expected: 'ஐயோ!! வலிக்குது...' },
  { id: 'Pos_Fun_0022', input: 'Vegam vegamaa oodu', expected: 'வேகம் வேகமா ஓடு' },
  { id: 'Pos_Fun_0023', input: 'Thanni kudika vendum', expected: 'தண்ணி குடிக்க வேண்டும்' },
  { id: 'Pos_Fun_0024', input: 'Iyarkai namaku kidaitha miga periya varam. Marangal sedigal kodigal nam suzhalai pathukaakirathu. Kaatru maasu padamal iruka naam marangalai valarka vendum. Plastic payanpaduthuvathai thavirkka vendum. Neer nilagalai suthamaaga vaipathu nam kadamai aagum. Varungaala thalaimuraiku nalla boomiya kodupom. Vivasaayam kaapom.', expected: 'இயற்கை நமக்கு கிடைத்த மிக பெரிய வரம்' },
  { id: 'Neg_Fun_0001', input: 'Enakuveedutheriyum', expected: 'எனக்கு வீடு தெரியும்' },
  { id: 'Neg_Fun_0002', input: 'P u t h a g a m', expected: 'புத்தகம்' },
  { id: 'Neg_Fun_0003', input: 'Naan   velai   seiyaren', expected: 'நான் வேலை செய்யுறேன்' },
  { id: 'Neg_Fun_0004', input: '.Appa', expected: '.அப்பா' },
  { id: 'Neg_Fun_0005', input: 'Am#ma', expected: 'அம்மா' },
  { id: 'Neg_Fun_0006', input: 'Saaaapadu', expected: 'சாப்பாடு' },
  { id: 'Neg_Fun_0007', input: 'Pallikudm', expected: 'பள்ளிக்கூடம்' },
  { id: 'Neg_Fun_0008', input: 'ThAnNiIr', expected: 'தண்ணீர்' },
  { id: 'Neg_Fun_0009', input: 'Oxygen', expected: 'Oxygen' },
  { id: 'Neg_Fun_0010', input: 'Varumvarumvarumvarum', expected: 'வரும் வரும்...' },
  { id: 'Pos_UI_0001', input: 'Nandri', expected: 'நன்றி' }
];

test.describe('IT3040 Assignment 1', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://tamil.changathi.com/');
    // FIX: Wait for the 'textarea' tag instead of '#editor'
    await page.waitForSelector('textarea', { state: 'visible' }); 
  });

  for (const data of testCases) {
    test(`${data.id}`, async ({ page }) => {
      // FIX: Select the input using the 'textarea' tag
      const inputBox = page.locator('textarea'); 

      // 1. Clear text safely
      await inputBox.fill(''); 

      // 2. Automated Typing
      await inputBox.pressSequentially(data.input, { delay: 50 });
      await inputBox.press('Space'); 

      // 3. Wait for processing (give it a moment to convert)
      if (data.id === 'Pos_Fun_0024') {
          await page.waitForTimeout(100000); // Longer wait for large input
      } else {
          await page.waitForTimeout(2000);
      } 

      // 4. Capture Actual Output (from the same box)
      let actualOutput = await inputBox.inputValue(); 
      
      // LOGGING
      console.log(`------------------------------------------------`);
      console.log(`TEST ID:  ${data.id}`);
      console.log(`EXPECTED: ${data.expected.substring(0, 20)}...`);
      console.log(`ACTUAL:   ${actualOutput.trim().substring(0, 20)}...`);
      console.log(`------------------------------------------------`);

      // 5. SOFT ASSERTION
      if (data.id.startsWith('Pos_Fun')) {
         const expectedSnippet = data.expected.substring(0, 3);
         expect.soft(actualOutput).toContain(expectedSnippet);
      }
    });
  }
});