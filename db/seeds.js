const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Project = require('../models/project')
const User = require('../models/user')

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
  if (err) return console.log(err)
  db.dropDatabase()
    .then(() => {
      return User.create([
        {
          username: 'john',
          name: 'john',
          email: 'john@john.com',
          password: 'pass',
          passwordConfirmation: 'pass',
          bio: 'This is a bio for john and this is a test. More information to come',
          profileImage: 'https://www.fillmurray.com/g/200/200',
          location: 'Glasgow',
          level: 'Junior'
          // skills: ['Illustration']
        },
        {
          username: 'abi',
          name: 'abi',
          email: 'abi@abi.com',
          password: 'pass',
          passwordConfirmation: 'pass',
          bio: 'This is a bio for abi and this is a test. More information to come',
          profileImage: 'https://placebear.com/200/200',
          location: 'London',
          level: 'Mid-Level'
          // skills: ['Illustration']
        },
        {
          username: 'jos',
          name: 'jos',
          email: 'jos@jos.com',
          password: 'pass',
          passwordConfirmation: 'pass',
          bio: 'This is a bio for jos and this is a test. More information to come',
          profileImage: 'http://placekitten.com/g/200/200',
          location: 'Kent',
          level: 'Junior'
          // skills: []
        },
        {
          username: 'nic',
          name: 'nic',
          email: 'nic@nic.com',
          password: 'pass',
          passwordConfirmation: 'pass',
          bio: 'This is a bio for nic and this is a test. More information to come',
          profileImage: 'https://www.stevensegallery.com/200/200',
          location: 'Northern Ireland',
          level: 'Senior'
          // skills: ['Illustration']
        },
        {
          name: 'Olympie',
          username: 'Olympie Maffia',
          email: 'omaffia0@oakley.com',
          password: 'XMoadxaIybFk',
          passwordConfirmation: 'XMoadxaIybFk',
          bio: 'vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit',
          profileImage: 'http://dummyimage.com/218x249.png/cc0000/ffffff',
          Location: 'Bābolsar',
          Level: 'Senior'
          // Skills: '{skill: \'JavaScript\'}'
        },
        {
          name: 'Adelheid',
          username: 'Adelheid Alsop',
          email: 'aalsop1@amazon.co.uk',
          password: 'b9MIZT7fbkhe',
          passwordConfirmation: 'b9MIZT7fbkhe',
          bio: 'at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede',
          profileImage: 'http://dummyimage.com/195x176.bmp/cc0000/ffffff',
          Location: 'Langpas',
          Level: 'Mid-Level'
          // Skills: '{skill: \'Quicktime\'}'
        },
        {
          name: 'Perle',
          username: 'Perle Waples',
          email: 'pwaples2@acquirethisname.com',
          password: 'y270uJ4',
          passwordConfirmation: 'y270uJ4',
          bio: 'tincidunt lacus at velit vivamus vel nulla eget eros elementum',
          profileImage: 'http://dummyimage.com/154x145.png/dddddd/000000',
          Location: 'Wenheng',
          Level: 'Senior'
          // Skills: '{skill: \'Quick Thinking\'}'
        },
        {
          name: 'Leanora',
          username: 'Leanora Hele',
          email: 'lhele3@oracle.com',
          password: 'CBXz9Zaxkj',
          passwordConfirmation: 'CBXz9Zaxkj',
          bio: 'semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis',
          profileImage: 'http://dummyimage.com/119x239.png/5fa2dd/ffffff',
          Location: 'Jaro',
          Level: 'Junior'
          // Skills: '{skill: \'Magazine Design\'}'
        },
        {
          name: 'Sally',
          username: 'Sally Batchellor',
          email: 'sbatchellor4@shutterfly.com',
          password: 'qPQwDAvn',
          passwordConfirmation: 'qPQwDAvn',
          bio: 'felis ut at dolor quis odio consequat varius integer ac',
          profileImage: 'http://dummyimage.com/208x133.jpg/dddddd/000000',
          Location: 'Pontian',
          Level: 'Junior'
          // Skills: '{skill: \'JavaScript\'}'
        },
        {
          name: 'Serena',
          username: 'Serena Iddenden',
          email: 'siddenden5@boston.com',
          password: 'DZdmp1',
          passwordConfirmation: 'DZdmp1',
          bio: 'porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam',
          profileImage: 'http://dummyimage.com/231x161.jpg/dddddd/000000',
          Location: 'Danghara',
          Level: 'Mid-Level'
          // Skills: '{skill: \'Illustration\'}'
        },
        {
          name: 'Adelice',
          username: 'Adelice Franken',
          email: 'afranken6@tiny.cc',
          password: '4sPBT7PrWF',
          passwordConfirmation: '4sPBT7PrWF',
          bio: 'luctus rutrum nulla tellus in sagittis dui vel nisl duis',
          profileImage: 'http://dummyimage.com/243x197.bmp/ff4444/ffffff',
          Location: 'Dazhongzhuang',
          Level: 'Mid-Level'
          // Skills: '{skill: \'Quicktime\'}'
        },
        {
          name: 'Dori',
          username: 'Dori Cattach',
          email: 'dcattach7@bravesites.com',
          password: '13vVL5',
          passwordConfirmation: '13vVL5',
          bio: 'sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit',
          profileImage: 'http://dummyimage.com/115x239.bmp/cc0000/ffffff',
          Location: 'Panoongan',
          Level: 'Mid-Level'
          // Skills: '{skill: \'Quick Thinking\'}'
        },
        {
          name: 'Bernete',
          username: 'Bernete Kleeborn',
          email: 'bkleeborn8@google.co.jp',
          password: 'aQsF66MOdgX',
          passwordConfirmation: 'aQsF66MOdgX',
          bio: 'odio condimentum id luctus nec molestie sed justo pellentesque viverra',
          profileImage: 'http://dummyimage.com/192x131.png/5fa2dd/ffffff',
          Location: 'Piła',
          Level: 'Mid-Level'
          // Skills: '{skill: \'Magazine Design\'}'
        },
        {
          name: 'Gladys',
          username: 'Gladys Whetland',
          email: 'gwhetland9@cbsnews.com',
          password: 'dHjQR9',
          passwordConfirmation: 'dHjQR9',
          bio: 'nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris',
          profileImage: 'http://dummyimage.com/242x138.png/5fa2dd/ffffff',
          Location: 'Chicago',
          Level: 'Junior'
          // Skills: '{skill: \'Quick Thinking\'}'
        },
        {
          name: 'Joella',
          username: 'Joella Gilfoy',
          email: 'jgilfoya@psu.edu',
          password: 'w5EbSrdL',
          passwordConfirmation: 'w5EbSrdL',
          bio: 'sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis',
          profileImage: 'http://dummyimage.com/103x177.jpg/5fa2dd/ffffff',
          Location: 'Placencia',
          Level: 'Mid-Level'
          // Skills: '{skill: \'Magazine Design\'}'
        },
        {
          name: 'Benny',
          username: 'Benny Ghidetti',
          email: 'bghidettib@bbb.org',
          password: 'SmBrE0F',
          passwordConfirmation: 'SmBrE0F',
          bio: 'sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi',
          profileImage: 'http://dummyimage.com/105x167.png/5fa2dd/ffffff',
          Location: 'Paris 02',
          Level: 'Mid-Level'
          // Skills: '{skill: \'Quicktime\'}'
        },
        {
          name: 'Hally',
          username: 'Hally Prew',
          email: 'hprewc@storify.com',
          password: 'JmY1TOCIT',
          passwordConfirmation: 'JmY1TOCIT',
          bio: 'aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in',
          profileImage: 'http://dummyimage.com/216x134.png/cc0000/ffffff',
          Location: 'Cavaillon',
          Level: 'Mid-Level'
          // Skills: '{skill: \'Magazine Design\'}'
        },
        {
          name: 'Alanah',
          username: 'Alanah Stead',
          email: 'asteadd@ucsd.edu',
          password: 'wwwy8kBGF',
          passwordConfirmation: 'wwwy8kBGF',
          bio: 'erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue',
          profileImage: 'http://dummyimage.com/137x186.png/5fa2dd/ffffff',
          Location: 'Dallas',
          Level: 'Senior'
          // Skills: '{skill: \'JavaScript\'}'
        },
        {
          name: 'Rica',
          username: 'Rica Gregon',
          email: 'rgregone@pinterest.com',
          password: '0rxz0m',
          passwordConfirmation: '0rxz0m',
          bio: 'platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat',
          profileImage: 'http://dummyimage.com/200x235.png/cc0000/ffffff',
          Location: 'Saint-Brieuc',
          Level: 'Senior'
          // Skills: '{skill: \'Magazine Design\'}'
        },
        {
          name: 'Kaile',
          username: 'Kaile Voyce',
          email: 'kvoycef@reuters.com',
          password: 'RkBKnMHJ',
          passwordConfirmation: 'RkBKnMHJ',
          bio: 'ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum',
          profileImage: 'http://dummyimage.com/194x174.jpg/ff4444/ffffff',
          Location: 'Alcanena',
          Level: 'Junior'
          // Skills: '{skill: \'Illustration\'}'
        },
        {
          name: 'Linnea',
          username: 'Linnea Wigzell',
          email: 'lwigzellg@go.com',
          password: 'WF4tdtd',
          passwordConfirmation: 'WF4tdtd',
          bio: 'praesent id massa id nisl venenatis lacinia aenean sit amet',
          profileImage: 'http://dummyimage.com/226x157.png/dddddd/000000',
          Location: 'Suzhou',
          Level: 'Junior'
          // Skills: '{skill: \'Quick Thinking\'}'
        },
        {
          name: 'Monah',
          username: 'Monah Martine',
          email: 'mmartineh@chron.com',
          password: 'kAZBOX',
          passwordConfirmation: 'kAZBOX',
          bio: 'eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio',
          profileImage: 'http://dummyimage.com/245x166.bmp/5fa2dd/ffffff',
          Location: 'Jejkowice',
          Level: 'Mid-Level'
          // Skills: '{skill: \'Quicktime\'}'
        },
        {
          name: 'Nicoline',
          username: 'Nicoline Laxe',
          email: 'nlaxei@t.co',
          password: 'BCzSCm7',
          passwordConfirmation: 'BCzSCm7',
          bio: 'nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel',
          profileImage: 'http://dummyimage.com/223x117.jpg/cc0000/ffffff',
          Location: 'Mayapusi',
          Level: 'Junior'
          // Skills: '{skill: \'Quicktime\'}'
        },
        {
          name: 'Eran',
          username: 'Eran Lamacraft',
          email: 'elamacraftj@answers.com',
          password: 'j6SS1fxmWfIX',
          passwordConfirmation: 'j6SS1fxmWfIX',
          bio: 'imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed',
          profileImage: 'http://dummyimage.com/148x125.bmp/cc0000/ffffff',
          Location: 'Ibirataia',
          Level: 'Senior'
          // Skills: '{skill: \'JavaScript\'}'
        },
        {
          name: 'Ralina',
          username: 'Ralina Meechan',
          email: 'rmeechank@cornell.edu',
          password: 'jFnQky7ue',
          passwordConfirmation: 'jFnQky7ue',
          bio: 'ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet',
          profileImage: 'http://dummyimage.com/229x204.jpg/cc0000/ffffff',
          Location: 'Lýkeio',
          Level: 'Junior'
          // Skills: '{skill: \'Quick Thinking\'}'
        },
        {
          name: 'Jessie',
          username: 'Jessie de Clerq',
          email: 'jdel@unicef.org',
          password: 'q8qI2fGfnO',
          passwordConfirmation: 'q8qI2fGfnO',
          bio: 'sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis',
          profileImage: 'http://dummyimage.com/102x214.png/5fa2dd/ffffff',
          Location: 'Bungoma',
          Level: 'Mid-Level'
          // Skills: '{skill: \'Magazine Design\'}'
        },
        {
          name: 'Winny',
          username: 'Winny Kanwell',
          email: 'wkanwellm@phpbb.com',
          password: 'J1dSdEgetN',
          passwordConfirmation: 'J1dSdEgetN',
          bio: 'et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et',
          profileImage: 'http://dummyimage.com/213x205.jpg/5fa2dd/ffffff',
          Location: 'Ladoeiro',
          Level: 'Junior'
          // Skills: '{skill: \'Quick Thinking\'}'
        },
        {
          name: 'Brenn',
          username: 'Brenn Benn',
          email: 'bbennn@prweb.com',
          password: 'Z4MSD0g',
          passwordConfirmation: 'Z4MSD0g',
          bio: 'congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus',
          profileImage: 'http://dummyimage.com/163x237.bmp/dddddd/000000',
          Location: 'Onueke',
          Level: 'Junior'
          // Skills: '{skill: \'Illustration\'}'
        },
        {
          name: 'Codi',
          username: 'Codi Mingasson',
          email: 'cmingassono@vistaprint.com',
          password: 'MXs0oq',
          passwordConfirmation: 'MXs0oq',
          bio: 'risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam',
          profileImage: 'http://dummyimage.com/162x210.bmp/cc0000/ffffff',
          Location: 'Gaozhai',
          Level: 'Senior'
          // Skills: '{skill: \'JavaScript\'}'
        },
        {
          name: 'Imogen',
          username: 'Imogen Sykora',
          email: 'isykorap@naver.com',
          password: 'GOiBmbrztAK',
          passwordConfirmation: 'GOiBmbrztAK',
          bio: 'fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat',
          profileImage: 'http://dummyimage.com/154x223.jpg/5fa2dd/ffffff',
          Location: 'Stavanger',
          Level: 'Mid-Level'
          // Skills: '{skill: \'Quick Thinking\'}'
        },
        {
          name: 'Neely',
          username: 'Neely Fawlo',
          email: 'nfawloq@geocities.jp',
          password: 'tLF9olij6Lb',
          passwordConfirmation: 'tLF9olij6Lb',
          bio: 'pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia',
          profileImage: 'http://dummyimage.com/172x156.jpg/dddddd/000000',
          Location: 'Broby',
          Level: 'Mid-Level'
          // Skills: '{skill: \'Illustration\'}'
        },
        {
          name: 'Petronille',
          username: 'Petronille Byas',
          email: 'pbyasr@utexas.edu',
          password: 'xmRCxTUm',
          passwordConfirmation: 'xmRCxTUm',
          bio: 'elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in',
          profileImage: 'http://dummyimage.com/158x199.bmp/cc0000/ffffff',
          Location: 'Orong',
          Level: 'Junior'
          // Skills: '{skill: \'Quick Thinking\'}'
        },
        {
          name: 'Renie',
          username: 'Renie Whittek',
          email: 'rwhitteks@posterous.com',
          password: 'Sae6dbBLhVs',
          passwordConfirmation: 'Sae6dbBLhVs',
          bio: 'in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit',
          profileImage: 'http://dummyimage.com/100x116.bmp/dddddd/000000',
          Location: 'Jeberos',
          Level: 'Junior'
          // Skills: '{skill: \'Quality Control\'}'
        },
        {
          name: 'Darsey',
          username: 'Darsey Abramzon',
          email: 'dabramzont@symantec.com',
          password: 'atlPnN',
          passwordConfirmation: 'atlPnN',
          bio: 'pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales',
          profileImage: 'http://dummyimage.com/137x228.png/cc0000/ffffff',
          Location: 'Uścimów Stary',
          Level: 'Junior'
          // Skills: '{skill: \'Quicktime\'}'
        },
        {
          name: 'Michal',
          username: 'Michal Wetter',
          email: 'mwetteru@amazon.co.jp',
          password: 'wRBSIgb8YF',
          passwordConfirmation: 'wRBSIgb8YF',
          bio: 'id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu',
          profileImage: 'http://dummyimage.com/160x146.bmp/5fa2dd/ffffff',
          Location: 'Xinsheng',
          Level: 'Junior'
          // Skills: '{skill: \'Magazine Design\'}'
        },
        {
          name: 'Lissi',
          username: 'Lissi Hindrick',
          email: 'lhindrickv@deliciousdays.com',
          password: 'r6O4zEkI0',
          passwordConfirmation: 'r6O4zEkI0',
          bio: 'interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus',
          profileImage: 'http://dummyimage.com/246x137.bmp/cc0000/ffffff',
          Location: 'Zhengguo',
          Level: 'Mid-Level'
          // Skills: '{skill: \'Magazine Design\'}'
        },
        {
          name: 'Valencia',
          username: 'Valencia Liley',
          email: 'vlileyw@yellowbook.com',
          password: '7eXIeqyX4P',
          passwordConfirmation: '7eXIeqyX4P',
          bio: 'morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate',
          profileImage: 'http://dummyimage.com/137x175.jpg/dddddd/000000',
          Location: 'Jangkungkusumo',
          Level: 'Mid-Level'
          // Skills: '{skill: \'Illustration\'}'
        },
        {
          name: 'Horatia',
          username: 'Horatia Yerby',
          email: 'hyerbyx@google.nl',
          password: 'tPY74YH',
          passwordConfirmation: 'tPY74YH',
          bio: 'erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin',
          profileImage: 'http://dummyimage.com/101x175.bmp/5fa2dd/ffffff',
          Location: 'Pergan',
          Level: 'Mid-Level'
          // Skills: '{skill: \'Illustration\'}'
        },
        {
          name: 'Meridith',
          username: 'Meridith Gogerty',
          email: 'mgogertyy@cmu.edu',
          password: 'Z1MUZeT1f',
          passwordConfirmation: 'Z1MUZeT1f',
          bio: 'dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem',
          profileImage: 'http://dummyimage.com/119x122.png/dddddd/000000',
          Location: 'Cungapmimbo',
          Level: 'Junior'
          // Skills: '{skill: \'Quicktime\'}'
        },
        {
          name: 'Vale',
          username: 'Vale Wemyss',
          email: 'vwemyssz@t.co',
          password: '6eduIv',
          passwordConfirmation: '6eduIv',
          bio: 'nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa',
          profileImage: 'http://dummyimage.com/114x115.jpg/cc0000/ffffff',
          Location: 'Brooklyn',
          Level: 'Junior'
          // Skills: '{skill: \'Illustration\'}'
        },
        {
          name: 'Joly',
          username: 'Joly Ashplant',
          email: 'jashplant10@usnews.com',
          password: 'NknFspzZnAN7',
          passwordConfirmation: 'NknFspzZnAN7',
          bio: 'rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia',
          profileImage: 'http://dummyimage.com/138x234.png/5fa2dd/ffffff',
          Location: 'Pedreira',
          Level: 'Mid-Level'
          // Skills: '{skill: \'Quality Control\'}'
        },
        {
          name: 'Rozanna',
          username: 'Rozanna Greenlees',
          email: 'rgreenlees11@mac.com',
          password: 'TcVFhSWVwl',
          passwordConfirmation: 'TcVFhSWVwl',
          bio: 'mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor',
          profileImage: 'http://dummyimage.com/188x221.bmp/ff4444/ffffff',
          Location: 'Pingshan',
          Level: 'Junior'
          // Skills: '{skill: \'Quicktime\'}'
        },
        {
          name: 'Maurine',
          username: 'Maurine Bahlmann',
          email: 'mbahlmann12@furl.net',
          password: 'zjJeOl',
          passwordConfirmation: 'zjJeOl',
          bio: 'gravida sem praesent id massa id nisl venenatis lacinia aenean sit',
          profileImage: 'http://dummyimage.com/211x190.png/ff4444/ffffff',
          Location: 'Riangbaring',
          Level: 'Junior'
          // Skills: '{skill: \'Quicktime\'}'
        },
        {
          name: 'Starla',
          username: 'Starla Ninnoli',
          email: 'sninnoli13@addthis.com',
          password: 'swinwG1P',
          passwordConfirmation: 'swinwG1P',
          bio: 'fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id',
          profileImage: 'http://dummyimage.com/121x109.jpg/ff4444/ffffff',
          Location: 'Sarmīn',
          Level: 'Junior'
          // Skills: '{skill: \'Magazine Design\'}'
        },
        {
          name: 'Charmaine',
          username: 'Charmaine Kindell',
          email: 'ckindell14@bandcamp.com',
          password: 'A9A8ZFVgPX',
          passwordConfirmation: 'A9A8ZFVgPX',
          bio: 'ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam',
          profileImage: 'http://dummyimage.com/136x166.png/cc0000/ffffff',
          Location: 'Huangcai',
          Level: 'Mid-Level'
          // Skills: '{skill: \'Illustration\'}'
        },
        {
          name: 'Sonya',
          username: 'Sonya Antonowicz',
          email: 'santonowicz15@technorati.com',
          password: 'W7CnvD',
          passwordConfirmation: 'W7CnvD',
          bio: 'curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus',
          profileImage: 'http://dummyimage.com/238x177.png/cc0000/ffffff',
          Location: 'Arcos',
          Level: 'Junior'
          // Skills: '{skill: \'Illustration\'}'
        },
        {
          name: 'Klarrisa',
          username: 'Klarrisa Tumielli',
          email: 'ktumielli16@netvibes.com',
          password: 'SZfHB2ANIi',
          passwordConfirmation: 'SZfHB2ANIi',
          bio: 'est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut',
          profileImage: 'http://dummyimage.com/108x187.bmp/ff4444/ffffff',
          Location: 'Potoru',
          Level: 'Mid-Level'
          // Skills: '{skill: \'Quality Control\'}'
        },
        {
          name: 'Corrine',
          username: 'Corrine Vaulkhard',
          email: 'cvaulkhard17@shutterfly.com',
          password: 'gEHuCUlaVH',
          passwordConfirmation: 'gEHuCUlaVH',
          bio: 'donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut',
          profileImage: 'http://dummyimage.com/116x230.bmp/ff4444/ffffff',
          Location: 'Huxu',
          Level: 'Junior'
          // Skills: '{skill: \'Quality Control\'}'
        },
        {
          name: 'Willie',
          username: 'Willie Harvett',
          email: 'wharvett18@zdnet.com',
          password: '2osIQb2hAMn',
          passwordConfirmation: '2osIQb2hAMn',
          bio: 'at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin',
          profileImage: 'http://dummyimage.com/182x125.png/cc0000/ffffff',
          Location: 'Guluoshan',
          Level: 'Senior'
          // Skills: '{skill: \'JavaScript\'}'
        },
        {
          name: 'Stephi',
          username: 'Stephi Kencott',
          email: 'skencott19@xinhuanet.com',
          password: 'TjLnmj1k2CA',
          passwordConfirmation: 'TjLnmj1k2CA',
          bio: 'nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas',
          profileImage: 'http://dummyimage.com/139x237.bmp/dddddd/000000',
          Location: 'Tiền Hải',
          Level: 'Senior'
          // Skills: '{skill: \'Quality Control\'}'
        },
        {
          name: 'Keri',
          username: 'Keri Itzik',
          email: 'kitzik1a@eventbrite.com',
          password: 'a6jrjA9VL',
          passwordConfirmation: 'a6jrjA9VL',
          bio: 'posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum',
          profileImage: 'http://dummyimage.com/130x230.bmp/dddddd/000000',
          Location: 'Calinog',
          Level: 'Senior'
          // Skills: '{skill: \'JavaScript\'}'
        },
        {
          name: 'Salomi',
          username: 'Salomi Gillmor',
          email: 'sgillmor1b@wired.com',
          password: 'BbW6RMSah',
          passwordConfirmation: 'BbW6RMSah',
          bio: 'mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam',
          profileImage: 'http://dummyimage.com/118x222.png/ff4444/ffffff',
          Location: 'General Alvear',
          Level: 'Junior'
          // Skills: '{skill: \'JavaScript\'}'
        },
        {
          name: 'Ibby',
          username: 'Ibby Maymand',
          email: 'imaymand1c@vinaora.com',
          password: 'avnXgryzgtl',
          passwordConfirmation: 'avnXgryzgtl',
          bio: 'at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse',
          profileImage: 'http://dummyimage.com/222x206.jpg/ff4444/ffffff',
          Location: 'Belogorskīy',
          Level: 'Junior'
          // Skills: '{skill: \'JavaScript\'}'
        },
        {
          name: 'Adan',
          username: 'Adan Cawtheray',
          email: 'acawtheray1d@globo.com',
          password: 's3nqGFqa',
          passwordConfirmation: 's3nqGFqa',
          bio: 'nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum',
          profileImage: 'http://dummyimage.com/213x199.jpg/dddddd/000000',
          Location: 'Gómfoi',
          Level: 'Senior'
          // Skills: '{skill: \'Quick Thinking\'}'
        },
        {
          name: 'Evie',
          username: 'Evie Danniel',
          email: 'edanniel1e@ycombinator.com',
          password: 'orHypQm',
          passwordConfirmation: 'orHypQm',
          bio: 'lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec',
          profileImage: 'http://dummyimage.com/203x107.png/cc0000/ffffff',
          Location: 'Hernández',
          Level: 'Junior'
          // Skills: '{skill: \'JavaScript\'}'
        },
        {
          name: 'Emelda',
          username: 'Emelda Karlsson',
          email: 'ekarlsson1f@hugedomains.com',
          password: 'hQq5jFY',
          passwordConfirmation: 'hQq5jFY',
          bio: 'pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in',
          profileImage: 'http://dummyimage.com/222x182.png/ff4444/ffffff',
          Location: 'Budakovo',
          Level: 'Senior'
          // Skills: '{skill: \'Quicktime\'}'
        },
        {
          name: 'Raphaela',
          username: 'Raphaela Westbrook',
          email: 'rwestbrook1g@devhub.com',
          password: '4yrOtfSO',
          passwordConfirmation: '4yrOtfSO',
          bio: 'ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu',
          profileImage: 'http://dummyimage.com/149x164.jpg/5fa2dd/ffffff',
          Location: 'Regente Feijó',
          Level: 'Mid-Level'
          // Skills: '{skill: \'Quality Control\'}'
        },
        {
          name: 'Reggi',
          username: 'Reggi Goodin',
          email: 'rgoodin1h@pinterest.com',
          password: 'TvoMyoC',
          passwordConfirmation: 'TvoMyoC',
          bio: 'morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem',
          profileImage: 'http://dummyimage.com/178x191.jpg/dddddd/000000',
          Location: 'Jietou',
          Level: 'Mid-Level'
          // Skills: '{skill: \'Illustration\'}'
        },
        {
          name: 'Dulci',
          username: 'Dulci Whiterod',
          email: 'dwhiterod1i@sogou.com',
          password: 'cEK7eQ2xQXv',
          passwordConfirmation: 'cEK7eQ2xQXv',
          bio: 'nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam',
          profileImage: 'http://dummyimage.com/180x104.jpg/cc0000/ffffff',
          Location: 'Kentongan',
          Level: 'Mid-Level'
          // Skills: '{skill: \'Magazine Design\'}'
        },
        {
          name: 'Carey',
          username: 'Carey Liepins',
          email: 'cliepins1j@trellian.com',
          password: '8D7aYHjvvig',
          passwordConfirmation: '8D7aYHjvvig',
          bio: 'aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis',
          profileImage: 'http://dummyimage.com/127x197.jpg/5fa2dd/ffffff',
          Location: 'Puerto Padre',
          Level: 'Junior'
          // Skills: '{skill: \'Quicktime\'}'
        },
        {
          name: 'Emelyne',
          username: 'Emelyne Cutbirth',
          email: 'ecutbirth1k@berkeley.edu',
          password: 'wVxWuS8v',
          passwordConfirmation: 'wVxWuS8v',
          bio: 'aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede',
          profileImage: 'http://dummyimage.com/120x147.bmp/dddddd/000000',
          Location: 'Skutskär',
          Level: 'Mid-Level'
          // Skills: '{skill: \'Illustration\'}'
        },
        {
          name: 'Darcey',
          username: 'Darcey Hylden',
          email: 'dhylden1l@google.pl',
          password: 'tQU7ML2VXvrA',
          passwordConfirmation: 'tQU7ML2VXvrA',
          bio: 'interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa',
          profileImage: 'http://dummyimage.com/155x183.png/5fa2dd/ffffff',
          Location: 'Katabu',
          Level: 'Junior'
          // Skills: '{skill: \'Quicktime\'}'
        },
        {
          name: 'Catherin',
          username: 'Catherin Born',
          email: 'cborn1m@hugedomains.com',
          password: 'arQcdwouA',
          passwordConfirmation: 'arQcdwouA',
          bio: 'eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus',
          profileImage: 'http://dummyimage.com/205x233.png/ff4444/ffffff',
          Location: 'La Curva',
          Level: 'Junior'
          // Skills: '{skill: \'Quick Thinking\'}'
        },
        {
          name: 'Flossy',
          username: 'Flossy Tinwell',
          email: 'ftinwell1n@google.ru',
          password: 'Ce1rmzc3',
          passwordConfirmation: 'Ce1rmzc3',
          bio: 'eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis',
          profileImage: 'http://dummyimage.com/218x205.bmp/ff4444/ffffff',
          Location: 'Washington',
          Level: 'Junior'
          // Skills: '{skill: \'JavaScript\'}'
        },
        {
          name: 'Reba',
          username: 'Reba Stammler',
          email: 'rstammler1o@gravatar.com',
          password: 'VEHFg4',
          passwordConfirmation: 'VEHFg4',
          bio: 'erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna',
          profileImage: 'http://dummyimage.com/144x108.png/5fa2dd/ffffff',
          Location: 'Musawa',
          Level: 'Junior'
          // Skills: '{skill: \'Illustration\'}'
        },
        {
          name: 'Jacenta',
          username: 'Jacenta Hauxley',
          email: 'jhauxley1p@globo.com',
          password: 'PphgWYLelb',
          passwordConfirmation: 'PphgWYLelb',
          bio: 'nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et',
          profileImage: 'http://dummyimage.com/180x237.jpg/5fa2dd/ffffff',
          Location: 'Santa Maria',
          Level: 'Junior'
          // Skills: '{skill: \'JavaScript\'}'
        },
        {
          name: 'Carmel',
          username: 'Carmel Pywell',
          email: 'cpywell1q@hc360.com',
          password: 'NYpla8je',
          passwordConfirmation: 'NYpla8je',
          bio: 'amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius',
          profileImage: 'http://dummyimage.com/235x218.bmp/5fa2dd/ffffff',
          Location: 'Jinchuan',
          Level: 'Mid-Level'
          // Skills: '{skill: \'Quality Control\'}'
        },
        {
          name: 'Dorelia',
          username: 'Dorelia Batha',
          email: 'dbatha1r@nymag.com',
          password: 'XcIAaY',
          passwordConfirmation: 'XcIAaY',
          bio: 'vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam',
          profileImage: 'http://dummyimage.com/160x155.jpg/ff4444/ffffff',
          Location: 'Samut Sakhon',
          Level: 'Junior'
          // Skills: '{skill: \'Quality Control\'}'
        },
        {
          name: 'Doralin',
          username: 'Doralin Alchin',
          email: 'dalchin1s@ameblo.jp',
          password: 'A34nTZ7ap',
          passwordConfirmation: 'A34nTZ7ap',
          bio: 'natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean',
          profileImage: 'http://dummyimage.com/230x115.jpg/cc0000/ffffff',
          Location: 'Hengxi',
          Level: 'Senior'
          // Skills: '{skill: \'Quality Control\'}'
        },
        {
          name: 'Ethel',
          username: 'Ethel Grinov',
          email: 'egrinov1t@mediafire.com',
          password: 'nqE0JQe1Kx3',
          passwordConfirmation: 'nqE0JQe1Kx3',
          bio: 'sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum',
          profileImage: 'http://dummyimage.com/118x139.png/5fa2dd/ffffff',
          Location: 'Przemyśl',
          Level: 'Senior'
          // Skills: '{skill: \'Quicktime\'}'
        },
        {
          name: 'Lucretia',
          username: 'Lucretia Burhouse',
          email: 'lburhouse1u@cbslocal.com',
          password: 'NVoUocRlX35',
          passwordConfirmation: 'NVoUocRlX35',
          bio: 'neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere',
          profileImage: 'http://dummyimage.com/186x195.bmp/dddddd/000000',
          Location: 'Danchang',
          Level: 'Senior'
          // Skills: '{skill: \'Quick Thinking\'}'
        },
        {
          name: 'Britt',
          username: 'Britt Clemits',
          email: 'bclemits1v@livejournal.com',
          password: '3ENQv4VjyZBm',
          passwordConfirmation: '3ENQv4VjyZBm',
          bio: 'nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque',
          profileImage: 'http://dummyimage.com/247x185.jpg/ff4444/ffffff',
          Location: 'Hejiaping',
          Level: 'Mid-Level'
          // Skills: '{skill: \'JavaScript\'}'
        },
        {
          name: 'Concettina',
          username: 'Concettina Sainte Paul',
          email: 'csainte1w@icq.com',
          password: 'i4IdsSF7Ly',
          passwordConfirmation: 'i4IdsSF7Ly',
          bio: 'pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna',
          profileImage: 'http://dummyimage.com/162x223.jpg/cc0000/ffffff',
          Location: 'Adir',
          Level: 'Mid-Level'
          // Skills: '{skill: \'JavaScript\'}'
        },
        {
          name: 'Gay',
          username: 'Gay Bontoft',
          email: 'gbontoft1x@youtube.com',
          password: 'VqbQZS5Vc',
          passwordConfirmation: 'VqbQZS5Vc',
          bio: 'adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis',
          profileImage: 'http://dummyimage.com/130x137.jpg/dddddd/000000',
          Location: 'Pando',
          Level: 'Senior'
          // Skills: '{skill: \'Quicktime\'}'
        },
        {
          name: 'Lee',
          username: 'Lee Walkinshaw',
          email: 'lwalkinshaw1y@cnn.com',
          password: 'Y34LM4e1Arpu',
          passwordConfirmation: 'Y34LM4e1Arpu',
          bio: 'nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla',
          profileImage: 'http://dummyimage.com/246x114.bmp/ff4444/ffffff',
          Location: 'Paoay',
          Level: 'Mid-Level'
          // Skills: '{skill: \'Quality Control\'}'
        },
        {
          name: 'Muriel',
          username: 'Muriel Della Scala',
          email: 'mdella1z@cocolog-nifty.com',
          password: 'JCFXWu',
          passwordConfirmation: 'JCFXWu',
          bio: 'vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra',
          profileImage: 'http://dummyimage.com/212x138.jpg/5fa2dd/ffffff',
          Location: 'Baihe',
          Level: 'Senior'
          // Skills: '{skill: \'Quicktime\'}'
        },
        {
          name: 'Lynne',
          username: 'Lynne Sleit',
          email: 'lsleit20@house.gov',
          password: 'nbzby51YKXK',
          passwordConfirmation: 'nbzby51YKXK',
          bio: 'aliquam sit amet diam in magna bibendum imperdiet nullam orci pede',
          profileImage: 'http://dummyimage.com/108x152.bmp/dddddd/000000',
          Location: 'Sokol’skoye',
          Level: 'Mid-Level'
          // Skills: '{skill: \'Quality Control\'}'
        },
        {
          name: 'Pansie',
          username: 'Pansie Jansa',
          email: 'pjansa21@com.com',
          password: 'VpBxV6fhX',
          passwordConfirmation: 'VpBxV6fhX',
          bio: 'cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem',
          profileImage: 'http://dummyimage.com/145x154.png/5fa2dd/ffffff',
          Location: 'Margahayu',
          Level: 'Junior'
          // Skills: '{skill: \'Quality Control\'}'
        },
        {
          name: 'Misha',
          username: 'Misha Crosser',
          email: 'mcrosser22@usatoday.com',
          password: 'DaGXRebZ',
          passwordConfirmation: 'DaGXRebZ',
          bio: 'non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in',
          profileImage: 'http://dummyimage.com/237x157.png/cc0000/ffffff',
          Location: 'Lyon',
          Level: 'Junior'
          // Skills: '{skill: \'Magazine Design\'}'
        },
        {
          name: 'Haley',
          username: 'Haley Prestedge',
          email: 'hprestedge23@hexun.com',
          password: 'zWUuiL',
          passwordConfirmation: 'zWUuiL',
          bio: 'pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio',
          profileImage: 'http://dummyimage.com/213x199.png/dddddd/000000',
          Location: 'Qianzhou',
          Level: 'Senior'
          // Skills: '{skill: \'Magazine Design\'}'
        },
        {
          name: 'Shannah',
          username: 'Shannah Phillips',
          email: 'sphillips24@sphinn.com',
          password: 'SJYRDsaSp0',
          passwordConfirmation: 'SJYRDsaSp0',
          bio: 'magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id',
          profileImage: 'http://dummyimage.com/213x239.bmp/5fa2dd/ffffff',
          Location: 'Tamandaré',
          Level: 'Mid-Level'
          // Skills: '{skill: \'Magazine Design\'}'
        },
        {
          name: 'Hanna',
          username: 'Hanna Riolfo',
          email: 'hriolfo25@ebay.com',
          password: 'nH1I1Pdz',
          passwordConfirmation: 'nH1I1Pdz',
          bio: 'porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at',
          profileImage: 'http://dummyimage.com/103x250.png/cc0000/ffffff',
          Location: 'San Vicente',
          Level: 'Senior'
          // Skills: '{skill: \'JavaScript\'}'
        },
        {
          name: 'Samaria',
          username: 'Samaria Hun',
          email: 'shun26@unc.edu',
          password: 'ylDRfv5GZYE',
          passwordConfirmation: 'ylDRfv5GZYE',
          bio: 'accumsan tellus nisi eu orci mauris lacinia sapien quis libero',
          profileImage: 'http://dummyimage.com/177x188.bmp/cc0000/ffffff',
          Location: 'Tan Sum',
          Level: 'Mid-Level'
          // Skills: '{skill: \'Quality Control\'}'
        },
        {
          name: 'Danell',
          username: 'Danell Giordano',
          email: 'dgiordano27@google.de',
          password: '5HxH79dFWM',
          passwordConfirmation: '5HxH79dFWM',
          bio: 'nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris',
          profileImage: 'http://dummyimage.com/173x195.jpg/dddddd/000000',
          Location: 'Osiek',
          Level: 'Senior'
          // Skills: '{skill: \'Illustration\'}'
        },
        {
          name: 'Zara',
          username: 'Zara Braney',
          email: 'zbraney28@1und1.de',
          password: 'eAKpbbIFuUV',
          passwordConfirmation: 'eAKpbbIFuUV',
          bio: 'et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut',
          profileImage: 'http://dummyimage.com/160x178.png/5fa2dd/ffffff',
          Location: 'Bassar',
          Level: 'Junior'
          // Skills: '{skill: \'Quality Control\'}'
        },
        {
          name: 'Danya',
          username: 'Danya Brumfield',
          email: 'dbrumfield29@admin.ch',
          password: 'yPh38Qrw44J',
          passwordConfirmation: 'yPh38Qrw44J',
          bio: 'lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum',
          profileImage: 'http://dummyimage.com/122x188.jpg/ff4444/ffffff',
          Location: 'Pointe-à-Pitre',
          Level: 'Mid-Level'
          // Skills: '{skill: \'Quality Control\'}'
        },
        {
          name: 'Theodosia',
          username: 'Theodosia Bidnall',
          email: 'tbidnall2a@is.gd',
          password: 'szTY9RFc',
          passwordConfirmation: 'szTY9RFc',
          bio: 'vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna',
          profileImage: 'http://dummyimage.com/232x220.jpg/dddddd/000000',
          Location: 'Jirjā',
          Level: 'Senior'
          // Skills: '{skill: \'Quality Control\'}'
        },
        {
          name: 'Ketty',
          username: 'Ketty Ramsey',
          email: 'kramsey2b@slashdot.org',
          password: 'EMgjhhU',
          passwordConfirmation: 'EMgjhhU',
          bio: 'quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla',
          profileImage: 'http://dummyimage.com/244x131.jpg/dddddd/000000',
          Location: 'Sarimukti Kaler',
          Level: 'Senior'
          // Skills: '{skill: \'JavaScript\'}'
        },
        {
          name: 'Rikki',
          username: 'Rikki Benoit',
          email: 'rbenoit2c@yellowbook.com',
          password: '9YqmMVF5Og4',
          passwordConfirmation: '9YqmMVF5Og4',
          bio: 'augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent',
          profileImage: 'http://dummyimage.com/168x116.bmp/dddddd/000000',
          Location: 'Uujim',
          Level: 'Mid-Level'
          // Skills: '{skill: \'Magazine Design\'}'
        },
        {
          name: 'Shaun',
          username: 'Shaun Gove',
          email: 'sgove2d@nationalgeographic.com',
          password: '1Gis1bGJmci',
          passwordConfirmation: '1Gis1bGJmci',
          bio: 'lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at',
          profileImage: 'http://dummyimage.com/169x159.bmp/5fa2dd/ffffff',
          Location: 'Jincheng',
          Level: 'Senior'
          // Skills: '{skill: \'JavaScript\'}'
        },
        {
          name: 'Ina',
          username: 'Ina Ronnay',
          email: 'ironnay2e@storify.com',
          password: '3xw97f1a7MX',
          passwordConfirmation: '3xw97f1a7MX',
          bio: 'odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est',
          profileImage: 'http://dummyimage.com/125x215.jpg/dddddd/000000',
          Location: 'Leuweheq',
          Level: 'Mid-Level'
          // Skills: '{skill: \'Quicktime\'}'
        },
        {
          name: 'Shannah',
          username: 'Shannah Moncreiffe',
          email: 'smoncreiffe2f@google.ca',
          password: 'j76aw2mPgYu',
          passwordConfirmation: 'j76aw2mPgYu',
          bio: 'nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim',
          profileImage: 'http://dummyimage.com/238x207.jpg/5fa2dd/ffffff',
          Location: 'Sūq al Khamīs',
          Level: 'Mid-Level'
          // Skills: '{skill: \'Magazine Design\'}'
        },
        {
          name: 'Cordelie',
          username: 'Cordelie Balk',
          email: 'cbalk2g@cdbaby.com',
          password: 'E1qYgUN8X',
          passwordConfirmation: 'E1qYgUN8X',
          bio: 'aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras',
          profileImage: 'http://dummyimage.com/207x214.png/dddddd/000000',
          Location: 'Larreynaga',
          Level: 'Senior'
          // Skills: '{skill: \'Quality Control\'}'
        },
        {
          name: 'Cary',
          username: 'Cary Stains',
          email: 'cstains2h@arizona.edu',
          password: 'vWjmjS',
          passwordConfirmation: 'vWjmjS',
          bio: 'erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla',
          profileImage: 'http://dummyimage.com/193x124.bmp/cc0000/ffffff',
          Location: 'Galis',
          Level: 'Mid-Level'
          // Skills: '{skill: \'Magazine Design\'}'
        },
        {
          name: 'Beatriz',
          username: 'Beatriz Rowlings',
          email: 'browlings2i@free.fr',
          password: '5Ym5vh1',
          passwordConfirmation: '5Ym5vh1',
          bio: 'eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin',
          profileImage: 'http://dummyimage.com/187x102.jpg/dddddd/000000',
          Location: 'Alis',
          Level: 'Senior'
          // Skills: '{skill: \'Quality Control\'}'
        },
        {
          name: 'Cornelle',
          username: 'Cornelle Creddon',
          email: 'ccreddon2j@github.com',
          password: 'CExS996',
          passwordConfirmation: 'CExS996',
          bio: 'nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis',
          profileImage: 'http://dummyimage.com/220x178.jpg/5fa2dd/ffffff',
          Location: 'Gontar',
          Level: 'Senior'
          // Skills: '{skill: \'Quicktime\'}'
        },
        {
          name: 'Rosemaria',
          username: 'Rosemaria De Angelis',
          email: 'rde2k@xrea.com',
          password: 'XKqoY8',
          passwordConfirmation: 'XKqoY8',
          bio: 'est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl',
          profileImage: 'http://dummyimage.com/105x216.jpg/cc0000/ffffff',
          Location: 'Ishigaki',
          Level: 'Senior'
          // Skills: '{skill: \'Quick Thinking\'}'
        },
        {
          name: 'Lillian',
          username: 'Lillian Glentz',
          email: 'lglentz2l@ucoz.ru',
          password: 'WDgg8J9bbqa4',
          passwordConfirmation: 'WDgg8J9bbqa4',
          bio: 'eget semper rutrum nulla nunc purus phasellus in felis donec',
          profileImage: 'http://dummyimage.com/123x146.png/ff4444/ffffff',
          Location: 'Gogosuket',
          Level: 'Mid-Level'
          // Skills: '{skill: \'Quicktime\'}'
        },
        {
          name: 'Zondra',
          username: 'Zondra Lammertz',
          email: 'zlammertz2m@mlb.com',
          password: 'KEvJFWLxO8',
          passwordConfirmation: 'KEvJFWLxO8',
          bio: 'non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus',
          profileImage: 'http://dummyimage.com/101x154.jpg/5fa2dd/ffffff',
          Location: 'Yulin',
          Level: 'Mid-Level'
          // Skills: '{skill: \'Magazine Design\'}'
        },
        {
          name: 'Rakel',
          username: 'Rakel Tedahl',
          email: 'rtedahl2n@wordpress.org',
          password: 'NS3kwhi94Kvd',
          passwordConfirmation: 'NS3kwhi94Kvd',
          bio: 'ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum',
          profileImage: 'http://dummyimage.com/203x167.png/dddddd/000000',
          Location: 'San Antonio',
          Level: 'Senior'
          // Skills: '{skill: \'Illustration\'}'
        },
        {
          name: 'Avis',
          username: 'Avis Heavy',
          email: 'aheavy2o@unesco.org',
          password: 'Qp66E45q',
          passwordConfirmation: 'Qp66E45q',
          bio: 'diam cras pellentesque volutpat dui maecenas tristique est et tempus semper',
          profileImage: 'http://dummyimage.com/121x181.bmp/cc0000/ffffff',
          Location: 'Arroyo Salado',
          Level: 'Senior'
          // Skills: '{skill: \'Illustration\'}'
        },
        {
          name: 'Heath',
          username: 'Heath Whitwham',
          email: 'hwhitwham2p@shop-pro.jp',
          password: '8ue5dmjmg1m',
          passwordConfirmation: '8ue5dmjmg1m',
          bio: 'ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at',
          profileImage: 'http://dummyimage.com/114x242.png/cc0000/ffffff',
          Location: 'Andapa',
          Level: 'Junior'
          // Skills: '{skill: \'JavaScript\'}'
        },
        {
          name: 'Lexis',
          username: 'Lexis Aloshikin',
          email: 'laloshikin2q@w3.org',
          password: 'w6i0dmUTwy',
          passwordConfirmation: 'w6i0dmUTwy',
          bio: 'porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo',
          profileImage: 'http://dummyimage.com/128x242.bmp/5fa2dd/ffffff',
          Location: 'Xushangqiao',
          Level: 'Senior'
          // Skills: '{skill: \'Quicktime\'}'
        },
        {
          name: 'Essy',
          username: 'Essy MacGorley',
          email: 'emacgorley2r@house.gov',
          password: 'rvo8nm',
          passwordConfirmation: 'rvo8nm',
          bio: 'lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non',
          profileImage: 'http://dummyimage.com/201x201.jpg/ff4444/ffffff',
          Location: 'Llano de Piedra',
          Level: 'Junior'
          // Skills: '{skill: \'Quality Control\'}'
        }
      ])
    })
    .then(createdUser => {
      console.log(`${createdUser.length} users have been created`)
      return Project.create([
        {
          name: 'Project 1',
          owner: createdUser[0],
          collaborators: [],
          description: 'This is a description of project 1',
          location: 'Glasgow',
          images: ['http://via.placeholder.com/360x360','http://via.placeholder.com/360x360'],
          completed: true,
          recruiting: false
        },
        {
          name: 'Project 2',
          owner: createdUser[1],
          collaborators: [createdUser[0],createdUser[2]],
          description: 'This is a description of project 2',
          location: 'Glasgow',
          images: ['http://via.placeholder.com/360x360','http://via.placeholder.com/360x360'],
          completed: true,
          recruiting: false
        },
        {
          name: 'Project 3',
          owner: createdUser[3],
          collaborators: [createdUser[1]],
          description: 'This is a description of project 3',
          location: 'Glasgow',
          images: ['http://via.placeholder.com/360x360','http://via.placeholder.com/360x360'],
          completed: true,
          recruiting: false
        },
        {
          name: 'Project 4',
          owner: createdUser[2],
          collaborators: [createdUser[0],createdUser[1]],
          description: 'This is a description of project 4',
          location: 'Glasgow',
          images: ['http://via.placeholder.com/360x360','http://via.placeholder.com/360x360'],
          completed: true,
          recruiting: false
        },
        {
          name: 'Veribet',
          owner: createdUser[9],
          collaborators: createdUser[9],
          description: 'in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis',
          location: 'Junaynat Raslān',
          images: ['http://via.placeholder.com/360x360'],
          completed: false,
          recruiting: false
        },
        {
          name: 'Sonair',
          owner: createdUser[13],
          collaborators: createdUser[13],
          description: 'quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id',
          location: 'Haoxin',
          images: ['http://via.placeholder.com/360x360'],
          completed: true,
          recruiting: false
        },
        {
          name: 'Andalax',
          owner: createdUser[0],
          collaborators: createdUser[0],
          description: 'sed tincidunt eu felis fusce posuere felis sed lacus morbi',
          location: 'Vicente Guerrero',
          images: ['http://via.placeholder.com/360x360'],
          completed: true,
          recruiting: false
        },
        {
          name: 'Vagram',
          owner: createdUser[2],
          collaborators: createdUser[2],
          description: 'augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula',
          location: 'Esuk Oron',
          images: ['http://via.placeholder.com/360x360'],
          completed: true,
          recruiting: false
        },
        {
          name: 'Domainer',
          owner: createdUser[0],
          collaborators: createdUser[0],
          description: 'morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices',
          location: 'Khadīr',
          images: ['http://via.placeholder.com/360x360'],
          completed: true,
          recruiting: false
        },
        {
          name: 'Bigtax',
          owner: createdUser[7],
          collaborators: createdUser[7],
          description: 'pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac',
          location: 'Novovarshavka',
          images: ['http://via.placeholder.com/360x360'],
          completed: true,
          recruiting: true
        },
        {
          name: 'Job',
          owner: createdUser[14],
          collaborators: createdUser[14],
          description: 'ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat',
          location: 'Motygino',
          images: ['http://via.placeholder.com/360x360'],
          completed: true,
          recruiting: false
        },
        {
          name: 'Greenlam',
          owner: createdUser[13],
          collaborators: createdUser[13],
          description: 'amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis',
          location: 'Zhuhong',
          images: ['http://via.placeholder.com/360x360'],
          completed: true,
          recruiting: true
        },
        {
          name: 'Latlux',
          owner: createdUser[5],
          collaborators: createdUser[5],
          description: 'magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus',
          location: 'Songgang',
          images: ['http://via.placeholder.com/360x360'],
          completed: false,
          recruiting: true
        },
        {
          name: 'Sonair',
          owner: createdUser[8],
          collaborators: createdUser[8],
          description: 'tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu',
          location: 'Zhongxing',
          images: ['http://via.placeholder.com/360x360'],
          completed: false,
          recruiting: true
        },
        {
          name: 'Zaam-Dox',
          owner: createdUser[0],
          collaborators: createdUser[0],
          description: 'ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus',
          location: 'Ouango',
          images: ['http://via.placeholder.com/360x360'],
          completed: true,
          recruiting: true
        },
        {
          name: 'Cookley',
          owner: createdUser[4],
          collaborators: createdUser[4],
          description: 'aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat',
          location: 'Vinica',
          images: ['http://via.placeholder.com/360x360'],
          completed: true,
          recruiting: false
        },
        {
          name: 'Alphazap',
          owner: createdUser[2],
          collaborators: createdUser[2],
          description: 'lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui',
          location: 'Swindon',
          images: ['http://via.placeholder.com/360x360'],
          completed: true,
          recruiting: true
        },
        {
          name: 'Duobam',
          owner: createdUser[6],
          collaborators: createdUser[6],
          description: 'felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan',
          location: 'Lasi Dua',
          images: ['http://via.placeholder.com/360x360'],
          completed: false,
          recruiting: false
        },
        {
          name: 'It',
          owner: createdUser[7],
          collaborators: createdUser[7],
          description: 'ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet',
          location: 'Vesoul',
          images: ['http://via.placeholder.com/360x360'],
          completed: false,
          recruiting: true
        },
        {
          name: 'Bigtax',
          owner: createdUser[4],
          collaborators: createdUser[4],
          description: 'ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non',
          location: 'Nakhon Nayok',
          images: ['http://via.placeholder.com/360x360'],
          completed: true,
          recruiting: true
        },
        {
          name: 'Overhold',
          owner: createdUser[3],
          collaborators: createdUser[3],
          description: 'velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget',
          location: 'Changbai',
          images: ['http://via.placeholder.com/360x360'],
          completed: true,
          recruiting: true
        },
        {
          name: 'Sonsing',
          owner: createdUser[12],
          collaborators: createdUser[12],
          description: 'vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel',
          location: 'Sinjhoro',
          images: ['http://via.placeholder.com/360x360'],
          completed: true,
          recruiting: true
        },
        {
          name: 'Hatity',
          owner: createdUser[8],
          collaborators: createdUser[8],
          description: 'dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend',
          location: 'Tolosa',
          images: ['http://via.placeholder.com/360x360'],
          completed: true,
          recruiting: false
        },
        {
          name: 'Temp',
          owner: createdUser[8],
          collaborators: createdUser[8],
          description: 'interdum mauris ullamcorper purus sit amet nulla quisque arcu libero',
          location: 'Donostia-San Sebastian',
          images: ['http://via.placeholder.com/360x360'],
          completed: false,
          recruiting: true
        },
        {
          name: 'Toughjoyfax',
          owner: createdUser[0],
          collaborators: createdUser[0],
          description: 'diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat',
          location: 'Umpak',
          images: ['http://via.placeholder.com/360x360'],
          completed: true,
          recruiting: false
        },
        {
          name: 'Flowdesk',
          owner: createdUser[1],
          collaborators: createdUser[1],
          description: 'etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id',
          location: 'Hilotongan',
          images: ['http://via.placeholder.com/360x360'],
          completed: true,
          recruiting: true
        },
        {
          name: 'Otcom',
          owner: createdUser[8],
          collaborators: createdUser[8],
          description: 'id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus',
          location: 'Kirovsk',
          images: ['http://via.placeholder.com/360x360'],
          completed: true,
          recruiting: true
        },
        {
          name: 'Tampflex',
          owner: createdUser[13],
          collaborators: createdUser[13],
          description: 'in imperdiet et commodo vulputate justo in blandit ultrices enim lorem',
          location: 'Ekou',
          images: ['http://via.placeholder.com/360x360'],
          completed: true,
          recruiting: true
        },
        {
          name: 'Quo Lux',
          owner: createdUser[12],
          collaborators: createdUser[12],
          description: 'faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat',
          location: 'Refojos',
          images: ['http://via.placeholder.com/360x360'],
          completed: true,
          recruiting: false
        },
        {
          name: 'Toughjoyfax',
          owner: createdUser[14],
          collaborators: createdUser[14],
          description: 'vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus',
          location: 'Pará de Minas',
          images: ['http://via.placeholder.com/360x360'],
          completed: false,
          recruiting: true
        },
        {
          name: 'Cardify',
          owner: createdUser[13],
          collaborators: createdUser[13],
          description: 'sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam',
          location: 'Daguo',
          images: ['http://via.placeholder.com/360x360'],
          completed: false,
          recruiting: true
        },
        {
          name: 'Hatity',
          owner: createdUser[14],
          collaborators: createdUser[14],
          description: 'sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus',
          location: 'Naḥf',
          images: ['http://via.placeholder.com/360x360'],
          completed: true,
          recruiting: true
        },
        {
          name: 'Aerified',
          owner: createdUser[4],
          collaborators: createdUser[4],
          description: 'mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus',
          location: 'Cumanayagua',
          images: ['http://via.placeholder.com/360x360'],
          completed: false,
          recruiting: false
        },
        {
          name: 'Greenlam',
          owner: createdUser[0],
          collaborators: createdUser[0],
          description: 'convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim',
          location: 'Avignon',
          images: ['http://via.placeholder.com/360x360'],
          completed: false,
          recruiting: true
        },
        {
          name: 'Stringtough',
          owner: createdUser[2],
          collaborators: createdUser[2],
          description: 'in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam',
          location: 'Haoxinying',
          images: ['http://via.placeholder.com/360x360'],
          completed: true,
          recruiting: true
        },
        {
          name: 'Y-find',
          owner: createdUser[6],
          collaborators: createdUser[6],
          description: 'in felis donec semper sapien a libero nam dui proin leo odio porttitor id',
          location: 'Banzão',
          images: ['http://via.placeholder.com/360x360'],
          completed: false,
          recruiting: false
        },
        {
          name: 'Prodder',
          owner: createdUser[6],
          collaborators: createdUser[6],
          description: 'ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor',
          location: 'Lakbok',
          images: ['http://via.placeholder.com/360x360'],
          completed: false,
          recruiting: false
        },
        {
          name: 'Bamity',
          owner: createdUser[8],
          collaborators: createdUser[8],
          description: 'quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at',
          location: 'Arnhem',
          images: ['http://via.placeholder.com/360x360'],
          completed: false,
          recruiting: true
        },
        {
          name: 'Zaam-Dox',
          owner: createdUser[1],
          collaborators: createdUser[1],
          description: 'aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia',
          location: 'Wang Sai Phun',
          images: ['http://via.placeholder.com/360x360'],
          completed: false,
          recruiting: true
        },
        {
          name: 'Tempsoft',
          owner: createdUser[12],
          collaborators: createdUser[12],
          description: 'morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus',
          location: 'Şaḩneh',
          images: ['http://via.placeholder.com/360x360'],
          completed: false,
          recruiting: true
        },
        {
          name: 'Zathin',
          owner: createdUser[2],
          collaborators: createdUser[2],
          description: 'a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula',
          location: 'Gualán',
          images: ['http://via.placeholder.com/360x360'],
          completed: true,
          recruiting: true
        },
        {
          name: 'Sonair',
          owner: createdUser[13],
          collaborators: createdUser[13],
          description: 'vulputate justo in blandit ultrices enim lorem ipsum dolor sit',
          location: 'Duba',
          images: ['http://via.placeholder.com/360x360'],
          completed: true,
          recruiting: false
        },
        {
          name: 'Namfix',
          owner: createdUser[6],
          collaborators: createdUser[6],
          description: 'luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui',
          location: 'Kasiyan',
          images: ['http://via.placeholder.com/360x360'],
          completed: true,
          recruiting: false
        },
        {
          name: 'Flexidy',
          owner: createdUser[10],
          collaborators: createdUser[10],
          description: 'non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa',
          location: 'Bang Krathum',
          images: ['http://via.placeholder.com/360x360'],
          completed: false,
          recruiting: true
        }
      ])
    })
    .then(createdProjects => console.log(`${createdProjects.length} projects created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})