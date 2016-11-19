/**
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/**
 * This is based, in part, on [fkadeveloper](https://github.com/fkadeveloper)'s
 * [lorem.js](https://github.com/fkadeveloper/loremjs).
 */
angular.module( 'ngPlaceholders', [] )

  .factory( 'PlaceholderTextService', function () {

    var words = ['lorem', 'ipsum', 'dolor', 'sit', 'amet,', 'consectetur', 'adipiscing',
      'elit', 'ut', 'aliquam,', 'purus', 'sit', 'amet', 'luctus', 'venenatis,',
      'lectus', 'magna', 'fringilla', 'urna,', 'porttitor', 'rhoncus', 'dolor',
      'purus', 'non', 'enim', 'praesent', 'elementum', 'facilisis', 'leo,', 'vel',
      'fringilla', 'est', 'ullamcorper', 'eget', 'nulla', 'facilisi', 'etiam',
      'dignissim', 'diam', 'quis', 'enim', 'lobortis', 'scelerisque', 'fermentum',
      'dui', 'faucibus', 'in', 'ornare', 'quam', 'viverra', 'orci', 'sagittis', 'eu',
      'volutpat', 'odio', 'facilisis', 'mauris', 'sit', 'amet', 'massa', 'vitae',
      'tortor', 'condimentum', 'lacinia', 'quis', 'vel', 'eros', 'donec', 'ac',
      'odio', 'tempor', 'orci', 'dapibus', 'ultrices', 'in', 'iaculis', 'nunc',
      'sed', 'augue', 'lacus,', 'viverra', 'vitae', 'congue', 'eu,', 'consequat',
      'ac', 'felis', 'donec', 'et', 'odio', 'pellentesque', 'diam', 'volutpat',
      'commodo', 'sed', 'egestas', 'egestas', 'fringilla', 'phasellus', 'faucibus',
      'scelerisque', 'eleifend', 'donec', 'pretium', 'vulputate', 'sapien', 'nec',
      'sagittis', 'aliquam', 'malesuada', 'bibendum', 'arcu', 'vitae', 'elementum',
      'curabitur', 'vitae', 'nunc', 'sed', 'velit', 'dignissim', 'sodales', 'ut',
      'eu', 'sem', 'integer', 'vitae', 'justo', 'eget', 'magna', 'fermentum',
      'iaculis', 'eu', 'non', 'diam', 'phasellus', 'vestibulum', 'lorem', 'sed',
      'risus', 'ultricies', 'tristique', 'nulla', 'aliquet', 'enim', 'tortor,', 'at',
      'auctor', 'urna', 'nunc', 'id', 'cursus', 'metus', 'aliquam', 'eleifend', 'mi',
      'in', 'nulla', 'posuere', 'sollicitudin', 'aliquam', 'ultrices', 'sagittis',
      'orci,', 'a', 'scelerisque', 'purus', 'semper', 'eget', 'duis', 'at', 'tellus',
      'at', 'urna', 'condimentum', 'mattis', 'pellentesque', 'id', 'nibh', 'tortor,',
      'id', 'aliquet', 'lectus', 'proin', 'nibh', 'nisl,', 'condimentum', 'id',
      'venenatis', 'a,', 'condimentum', 'vitae', 'sapien', 'pellentesque',
      'habitant', 'morbi', 'tristique', 'senectus', 'et', 'netus', 'et', 'malesuada',
      'fames', 'ac', 'turpis', 'egestas', 'sed', 'tempus,', 'urna', 'et', 'pharetra',
      'pharetra,', 'massa', 'massa', 'ultricies', 'mi,', 'quis', 'hendrerit',
      'dolor', 'magna', 'eget', 'est', 'lorem', 'ipsum', 'dolor', 'sit', 'amet,',
      'consectetur', 'adipiscing', 'elit', 'pellentesque', 'habitant', 'morbi',
      'tristique', 'senectus', 'et', 'netus', 'et', 'malesuada', 'fames', 'ac',
      'turpis', 'egestas', 'integer', 'eget', 'aliquet', 'nibh', 'praesent',
      'tristique', 'magna', 'sit', 'amet', 'purus', 'gravida', 'quis', 'blandit',
      'turpis', 'cursus', 'in', 'hac', 'habitasse', 'platea', 'dictumst', 'quisque',
      'sagittis,', 'purus', 'sit', 'amet', 'volutpat', 'consequat,', 'mauris',
      'nunc', 'congue', 'nisi,', 'vitae', 'suscipit', 'tellus', 'mauris', 'a',
      'diam', 'maecenas', 'sed', 'enim', 'ut', 'sem', 'viverra', 'aliquet', 'eget',
      'sit', 'amet', 'tellus', 'cras', 'adipiscing', 'enim', 'eu', 'turpis',
      'egestas', 'pretium', 'aenean', 'pharetra,', 'magna', 'ac', 'placerat',
      'vestibulum,', 'lectus', 'mauris', 'ultrices', 'eros,', 'in', 'cursus',
      'turpis', 'massa', 'tincidunt', 'dui', 'ut', 'ornare', 'lectus', 'sit', 'amet',
      'est', 'placerat', 'in', 'egestas', 'erat', 'imperdiet', 'sed', 'euismod',
      'nisi', 'porta', 'lorem', 'mollis', 'aliquam', 'ut', 'porttitor', 'leo', 'a',
      'diam', 'sollicitudin', 'tempor', 'id', 'eu', 'nisl', 'nunc', 'mi', 'ipsum,',
      'faucibus', 'vitae', 'aliquet', 'nec,', 'ullamcorper', 'sit', 'amet', 'risus',
      'nullam', 'eget', 'felis', 'eget', 'nunc', 'lobortis', 'mattis', 'aliquam',
      'faucibus', 'purus', 'in', 'massa', 'tempor', 'nec', 'feugiat', 'nisl',
      'pretium', 'fusce', 'id', 'velit', 'ut', 'tortor', 'pretium', 'viverra',
      'suspendisse', 'potenti', 'nullam', 'ac', 'tortor', 'vitae', 'purus',
      'faucibus', 'ornare', 'suspendisse', 'sed', 'nisi', 'lacus,', 'sed', 'viverra',
      'tellus', 'in', 'hac', 'habitasse', 'platea', 'dictumst', 'vestibulum',
      'rhoncus', 'est', 'pellentesque', 'elit', 'ullamcorper', 'dignissim', 'cras',
      'tincidunt', 'lobortis', 'feugiat', 'vivamus', 'at', 'augue', 'eget', 'arcu',
      'dictum', 'varius', 'duis', 'at', 'consectetur', 'lorem', 'donec', 'massa',
      'sapien,', 'faucibus', 'et', 'molestie', 'ac,', 'feugiat', 'sed', 'lectus',
      'vestibulum', 'mattis', 'ullamcorper', 'velit', 'sed', 'ullamcorper', 'morbi',
      'tincidunt', 'ornare', 'massa,', 'eget', 'egestas', 'purus', 'viverra',
      'accumsan', 'in', 'nisl', 'nisi,', 'scelerisque', 'eu', 'ultrices', 'vitae,',
      'auctor', 'eu', 'augue', 'ut', 'lectus', 'arcu,', 'bibendum', 'at', 'varius',
      'vel,', 'pharetra', 'vel', 'turpis', 'nunc', 'eget', 'lorem', 'dolor,', 'sed',
      'viverra', 'ipsum', 'nunc', 'aliquet', 'bibendum', 'enim,', 'facilisis',
      'gravida', 'neque', 'convallis', 'a', 'cras', 'semper', 'auctor', 'neque,',
      'vitae', 'tempus', 'quam', 'pellentesque', 'nec', 'nam', 'aliquam', 'sem',
      'et', 'tortor', 'consequat', 'id', 'porta', 'nibh', 'venenatis', 'cras', 'sed',
      'felis', 'eget', 'velit', 'aliquet', 'sagittis', 'id', 'consectetur', 'purus',
      'ut', 'faucibus', 'pulvinar', 'elementum', 'integer', 'enim', 'neque,',
      'volutpat', 'ac', 'tincidunt', 'vitae,', 'semper', 'quis', 'lectus', 'nulla',
      'at', 'volutpat', 'diam', 'ut', 'venenatis', 'tellus', 'in', 'metus',
      'vulputate', 'eu', 'scelerisque', 'felis', 'imperdiet', 'proin', 'fermentum',
      'leo', 'vel', 'orci', 'porta', 'non', 'pulvinar', 'neque', 'laoreet',
      'suspendisse', 'interdum', 'consectetur', 'libero,', 'id', 'faucibus', 'nisl',
      'tincidunt', 'eget', 'nullam', 'non', 'nisi', 'est,', 'sit', 'amet',
      'facilisis', 'magna', 'etiam', 'tempor,', 'orci', 'eu', 'lobortis',
      'elementum,', 'nibh', 'tellus', 'molestie', 'nunc,', 'non', 'blandit', 'massa',
      'enim', 'nec', 'dui', 'nunc', 'mattis', 'enim', 'ut', 'tellus', 'elementum',
      'sagittis', 'vitae', 'et', 'leo', 'duis', 'ut', 'diam', 'quam', 'nulla',
      'porttitor', 'massa', 'id', 'neque', 'aliquam', 'vestibulum', 'morbi',
      'blandit', 'cursus', 'risus,', 'at', 'ultrices', 'mi', 'tempus', 'imperdiet',
      'nulla', 'malesuada', 'pellentesque', 'elit', 'eget', 'gravida', 'cum',
      'sociis', 'natoque', 'penatibus', 'et', 'magnis', 'dis', 'parturient',
      'montes,', 'nascetur', 'ridiculus', 'mus', 'mauris', 'vitae', 'ultricies',
      'leo', 'integer', 'malesuada', 'nunc', 'vel', 'risus', 'commodo', 'viverra',
      'maecenas', 'accumsan,', 'lacus', 'vel', 'facilisis', 'volutpat,', 'est',
      'velit', 'egestas', 'dui,', 'id', 'ornare', 'arcu', 'odio', 'ut', 'sem',
      'nulla', 'pharetra', 'diam', 'sit', 'amet', 'nisl', 'suscipit', 'adipiscing',
      'bibendum', 'est', 'ultricies', 'integer', 'quis', 'auctor', 'elit', 'sed',
      'vulputate', 'mi', 'sit', 'amet', 'mauris', 'commodo', 'quis', 'imperdiet',
      'massa', 'tincidunt', 'nunc', 'pulvinar', 'sapien', 'et', 'ligula',
      'ullamcorper', 'malesuada', 'proin', 'libero', 'nunc,', 'consequat',
      'interdum', 'varius', 'sit', 'amet,', 'mattis', 'vulputate', 'enim', 'nulla',
      'aliquet', 'porttitor', 'lacus,', 'luctus', 'accumsan', 'tortor', 'posuere',
      'ac', 'ut', 'consequat', 'semper', 'viverra', 'nam', 'libero', 'justo,',
      'laoreet', 'sit', 'amet', 'cursus', 'sit', 'amet,', 'dictum', 'sit', 'amet',
      'justo', 'donec', 'enim', 'diam,', 'vulputate', 'ut', 'pharetra', 'sit',
      'amet,', 'aliquam', 'id', 'diam', 'maecenas', 'ultricies', 'mi', 'eget',
      'mauris', 'pharetra', 'et', 'ultrices', 'neque', 'ornare', 'aenean', 'euismod',
      'elementum', 'nisi,', 'quis', 'eleifend', 'quam', 'adipiscing', 'vitae',
      'proin', 'sagittis,', 'nisl', 'rhoncus', 'mattis', 'rhoncus,', 'urna', 'neque',
      'viverra', 'justo,', 'nec', 'ultrices', 'dui', 'sapien', 'eget', 'mi', 'proin',
      'sed', 'libero', 'enim,', 'sed', 'faucibus', 'turpis', 'in', 'eu', 'mi',
      'bibendum', 'neque', 'egestas', 'congue', 'quisque', 'egestas', 'diam', 'in',
      'arcu', 'cursus', 'euismod', 'quis', 'viverra', 'nibh', 'cras', 'pulvinar',
      'mattis', 'nunc,', 'sed', 'blandit', 'libero', 'volutpat', 'sed', 'cras',
      'ornare', 'arcu', 'dui', 'vivamus', 'arcu', 'felis,', 'bibendum', 'ut',
      'tristique', 'et,', 'egestas', 'quis', 'ipsum', 'suspendisse', 'ultrices',
      'fusce', 'ut', 'placerat', 'orci', 'nulla', 'pellentesque',
      'dignissim', 'enim,', 'sit', 'amet', 'venenatis', 'urna', 'cursus', 'eget',
      'nunc', 'scelerisque', 'viverra', 'mauris,', 'in', 'aliquam', 'sem',
      'fringilla', 'ut', 'morbi', 'tincidunt', 'augue', 'interdum', 'velit',
      'euismod', 'in', 'pellentesque', 'massa', 'placerat', 'duis', 'ultricies',
      'lacus', 'sed', 'turpis', 'tincidunt', 'id', 'aliquet', 'risus', 'feugiat',
      'in', 'ante', 'metus,', 'dictum', 'at', 'tempor', 'commodo,', 'ullamcorper',
      'a', 'lacus', 'vestibulum', 'sed', 'arcu', 'non', 'odio', 'euismod', 'lacinia',
      'at', 'quis', 'risus', 'sed', 'vulputate', 'odio', 'ut', 'enim', 'blandit',
      'volutpat', 'maecenas', 'volutpat', 'blandit', 'aliquam', 'etiam', 'erat',
      'velit,', 'scelerisque', 'in', 'dictum', 'non,', 'consectetur', 'a', 'erat',
      'nam', 'at', 'lectus', 'urna', 'duis', 'convallis', 'convallis', 'tellus,',
      'id', 'interdum', 'velit', 'laoreet', 'id', 'donec', 'ultrices', 'tincidunt',
      'arcu,', 'non', 'sodales', 'neque', 'sodales', 'ut', 'etiam', 'sit', 'amet',
      'nisl', 'purus,', 'in', 'mollis', 'nunc', 'sed', 'id', 'semper', 'risus', 'in',
      'hendrerit', 'gravida', 'rutrum', 'quisque', 'non', 'tellus', 'orci,', 'ac',
      'auctor', 'augue', 'mauris', 'augue', 'neque,', 'gravida', 'in', 'fermentum',
      'et,', 'sollicitudin', 'ac', 'orci', 'phasellus', 'egestas', 'tellus',
      'rutrum', 'tellus', 'pellentesque', 'eu', 'tincidunt', 'tortor', 'aliquam',
      'nulla', 'facilisi', 'cras', 'fermentum,', 'odio', 'eu', 'feugiat', 'pretium,',
      'nibh', 'ipsum', 'consequat', 'nisl,', 'vel', 'pretium', 'lectus', 'quam',
      'id', 'leo', 'in', 'vitae', 'turpis', 'massa', 'sed', 'elementum', 'tempus',
      'egestas', 'sed', 'sed', 'risus', 'pretium', 'quam', 'vulputate', 'dignissim',
      'suspendisse', 'in', 'est', 'ante', 'in', 'nibh', 'mauris,', 'cursus',
      'mattis', 'molestie', 'a,', 'iaculis', 'at', 'erat', 'pellentesque',
      'adipiscing', 'commodo', 'elit,', 'at', 'imperdiet', 'dui', 'accumsan', 'sit',
      'amet', 'nulla', 'facilisi', 'morbi', 'tempus', 'iaculis', 'urna,', 'id',
      'volutpat', 'lacus', 'laoreet', 'non', 'curabitur', 'gravida', 'arcu', 'ac',
      'tortor', 'dignissim', 'convallis', 'aenean', 'et', 'tortor', 'at', 'risus',
      'viverra', 'adipiscing', 'at', 'in', 'tellus', 'integer', 'feugiat',
      'scelerisque', 'varius', 'morbi', 'enim', 'nunc,', 'faucibus', 'a',
      'pellentesque', 'sit', 'amet,', 'porttitor', 'eget', 'dolor', 'morbi', 'non',
      'arcu', 'risus,', 'quis', 'varius', 'quam', 'quisque', 'id', 'diam', 'vel',
      'quam', 'elementum', 'pulvinar', 'etiam', 'non', 'quam', 'lacus',
      'suspendisse', 'faucibus', 'interdum', 'posuere', 'lorem', 'ipsum', 'dolor',
      'sit', 'amet,', 'consectetur', 'adipiscing', 'elit', 'duis', 'tristique',
      'sollicitudin', 'nibh', 'sit', 'amet', 'commodo', 'nulla', 'facilisi',
      'nullam', 'vehicula', 'ipsum', 'a', 'arcu', 'cursus', 'vitae', 'congue',
      'mauris', 'rhoncus', 'aenean', 'vel', 'elit', 'scelerisque', 'mauris',
      'pellentesque', 'pulvinar', 'pellentesque', 'habitant', 'morbi', 'tristique',
      'senectus', 'et', 'netus', 'et', 'malesuada', 'fames', 'ac', 'turpis',
      'egestas', 'maecenas', 'pharetra', 'convallis', 'posuere', 'morbi', 'leo',
      'urna,', 'molestie', 'at', 'elementum', 'eu,', 'facilisis', 'sed', 'odio',
      'morbi', 'quis', 'commodo', 'odio', 'aenean', 'sed', 'adipiscing', 'diam',
      'donec', 'adipiscing', 'tristique', 'risus', 'nec', 'feugiat', 'in',
      'fermentum', 'posuere', 'urna', 'nec', 'tincidunt', 'praesent', 'semper',
      'feugiat', 'nibh', 'sed', 'pulvinar', 'proin', 'gravida', 'hendrerit',
      'lectus', 'a', 'molestie', 'gravida', 'dictum'
    ];


    var name = {
      'first_name': ['Aaliyah','Aaron','Abagail','Abbey','Abbie','Abbigail','Abby','Abdiel','Abdul','Abdullah','Abe','Abel','Abelardo','Abigail','Abigale','Abigayle','Abner','Abraham','Ada','Adah','Adalberto','Adaline','Adam','Adan','Addie','Addison','Adela','Adelbert','Adele','Adelia','Adeline','Adell','Adella','Adelle','Aditya','Adolf','Adolfo','Adolph','Adolphus','Adonis','Adrain','Adrian','Adriana','Adrianna','Adriel','Adrien','Adrienne','Afton','Aglae','Agnes','Agustin','Agustina','Ahmad','Ahmed','Aida','Aidan','Aiden','Aileen','Aimee','Aisha','Aiyana','Akeem','Al','Alaina','Alan','Alana','Alanis','Alanna','Alayna','Alba','Albert','Alberta','Albertha','Alberto','Albin','Albina','Alda','Alden','Alec','Aleen','Alejandra','Alejandrin','Alek','Alena','Alene','Alessandra','Alessandro','Alessia','Aletha','Alex','Alexa','Alexander','Alexandra','Alexandre','Alexandrea','Alexandria','Alexandrine','Alexandro','Alexane','Alexanne','Alexie','Alexis','Alexys','Alexzander','Alf','Alfonso','Alfonzo','Alford','Alfred','Alfreda','Alfredo','Ali','Alia','Alice','Alicia','Alisa','Alisha','Alison','Alivia','Aliya','Aliyah','Aliza','Alize','Allan','Allen','Allene','Allie','Allison','Ally','Alphonso','Alta','Althea','Alva','Alvah','Alvena','Alvera','Alverta','Alvina','Alvis','Alyce','Alycia','Alysa','Alysha','Alyson','Alysson','Amalia','Amanda','Amani','Amara','Amari','Amaya','Amber','Ambrose','Amelia','Amelie','Amely','America','Americo','Amie','Amina','Amir','Amira','Amiya','Amos','Amparo','Amy','Amya','Ana','Anabel','Anabelle','Anahi','Anais','Anastacio','Anastasia','Anderson','Andre','Andreane','Andreanne','Andres','Andrew','Andy','Angel','Angela','Angelica','Angelina','Angeline','Angelita','Angelo','Angie','Angus','Anibal','Anika','Anissa','Anita','Aniya','Aniyah','Anjali','Anna','Annabel','Annabell','Annabelle','Annalise','Annamae','Annamarie','Anne','Annetta','Annette','Annie','Ansel','Ansley','Anthony','Antoinette','Antone','Antonetta','Antonette','Antonia','Antonietta','Antonina','Antonio','Antwan','Antwon','Anya','April','Ara','Araceli','Aracely','Arch','Archibald','Ardella','Arden','Ardith','Arely','Ari','Ariane','Arianna','Aric','Ariel','Arielle','Arjun','Arlene','Arlie','Arlo','Armand','Armando','Armani','Arnaldo','Arne','Arno','Arnold','Arnoldo','Arnulfo','Aron','Art','Arthur','Arturo','Arvel','Arvid','Arvilla','Aryanna','Asa','Asha','Ashlee','Ashleigh','Ashley','Ashly','Ashlynn','Ashton','Ashtyn','Asia','Assunta','Astrid','Athena','Aubree','Aubrey','Audie','Audra','Audreanne','Audrey','August','Augusta','Augustine','Augustus','Aurelia','Aurelie','Aurelio','Aurore','Austen','Austin','Austyn','Autumn','Ava','Avery','Avis','Axel','Ayana','Ayden','Ayla','Aylin','Baby','Bailee','Bailey','Barbara','Barney','Baron','Barrett','Barry','Bart','Bartholome','Barton','Baylee','Beatrice','Beau','Beaulah','Bell','Bella','Belle','Ben','Benedict','Benjamin','Bennett','Bennie','Benny','Benton','Berenice','Bernadette','Bernadine','Bernard','Bernardo','Berneice','Bernhard','Bernice','Bernie','Berniece','Bernita','Berry','Bert','Berta','Bertha','Bertram','Bertrand','Beryl','Bessie','Beth','Bethany','Bethel','Betsy','Bette','Bettie','Betty','Bettye','Beulah','Beverly','Bianka','Bill','Billie','Billy','Birdie','Blair','Blaise','Blake','Blanca','Blanche','Blaze','Bo','Bobbie','Bobby','Bonita','Bonnie','Boris','Boyd','Brad','Braden','Bradford','Bradley','Bradly','Brady','Braeden','Brain','Brandi','Brando','Brandon','Brandt','Brandy','Brandyn','Brannon','Branson','Brant','Braulio','Braxton','Brayan','Breana','Breanna','Breanne','Brenda','Brendan','Brenden','Brendon','Brenna','Brennan','Brennon','Brent','Bret','Brett','Bria','Brian','Briana','Brianne','Brice','Bridget','Bridgette','Bridie','Brielle','Brigitte','Brionna','Brisa','Britney','Brittany','Brock','Broderick','Brody','Brook','Brooke','Brooklyn','Brooks','Brown','Bruce','Bryana','Bryce','Brycen','Bryon','Buck','Bud','Buddy','Buford','Bulah','Burdette','Burley','Burnice','Buster','Cade','Caden','Caesar','Caitlyn','Cale','Caleb','Caleigh','Cali','Calista','Callie','Camden','Cameron','Camila','Camilla','Camille','Camren','Camron','Camryn','Camylle','Candace','Candelario','Candice','Candida','Candido','Cara','Carey','Carissa','Carlee','Carleton','Carley','Carli','Carlie','Carlo','Carlos','Carlotta','Carmel','Carmela','Carmella','Carmelo','Carmen','Carmine','Carol','Carolanne','Carole','Carolina','Caroline','Carolyn','Carolyne','Carrie','Carroll','Carson','Carter','Cary','Casandra','Casey','Casimer','Casimir','Casper','Cassandra','Cassandre','Cassidy','Cassie','Catalina','Caterina','Catharine','Catherine','Cathrine','Cathryn','Cathy','Cayla','Ceasar','Cecelia','Cecil','Cecile','Cecilia','Cedrick','Celestine','Celestino','Celia','Celine','Cesar','Chad','Chadd','Chadrick','Chaim','Chance','Chandler','Chanel','Chanelle','Charity','Charlene','Charles','Charley','Charlie','Charlotte','Chase','Chasity','Chauncey','Chaya','Chaz','Chelsea','Chelsey','Chelsie','Chesley','Chester','Chet','Cheyanne','Cheyenne','Chloe','Chris','Christ','Christa','Christelle','Christian','Christiana','Christina','Christine','Christop','Christophe','Christopher','Christy','Chyna','Ciara','Cicero','Cielo','Cierra','Cindy','Citlalli','Clair','Claire','Clara','Clarabelle','Clare','Clarissa','Clark','Claud','Claude','Claudia','Claudie','Claudine','Clay','Clemens','Clement','Clementina','Clementine','Clemmie','Cleo','Cleora','Cleta','Cletus','Cleve','Cleveland','Clifford','Clifton','Clint','Clinton','Clotilde','Clovis','Cloyd','Clyde','Coby','Cody','Colby','Cole','Coleman','Colin','Colleen','Collin','Colt','Colten','Colton','Columbus','Concepcion','Conner','Connie','Connor','Conor','Conrad','Constance','Constantin','Consuelo','Cooper','Cora','Coralie','Corbin','Cordelia','Cordell','Cordia','Cordie','Corene','Corine','Cornelius','Cornell','Corrine','Cortez','Cortney','Cory','Coty','Courtney','Coy','Craig','Crawford','Creola','Cristal','Cristian','Cristina','Cristobal','Cristopher','Cruz','Crystal','Crystel','Cullen','Curt','Curtis','Cydney','Cynthia','Cyril','Cyrus','Dagmar','Dahlia','Daija','Daisha','Daisy','Dakota','Dale','Dallas','Dallin','Dalton','Damaris','Dameon','Damian','Damien','Damion','Damon','Dan','Dana','Dandre','Dane','D\'angelo','Dangelo','Danial','Daniela','Daniella','Danielle','Danika','Dannie','Danny','Dante','Danyka','Daphne','Daphnee','Daphney','Darby','Daren','Darian','Dariana','Darien','Dario','Darion','Darius','Darlene','Daron','Darrel','Darrell','Darren','Darrick','Darrin','Darrion','Darron','Darryl','Darwin','Daryl','Dashawn','Dasia','Dave','David','Davin','Davion','Davon','Davonte','Dawn','Dawson','Dax','Dayana','Dayna','Dayne','Dayton','Dean','Deangelo','Deanna','Deborah','Declan','Dedric','Dedrick','Dee','Deion','Deja','Dejah','Dejon','Dejuan','Delaney','Delbert','Delfina','Delia','Delilah','Dell','Della','Delmer','Delores','Delpha','Delphia','Delphine','Delta','Demarco','Demarcus','Demario','Demetris','Demetrius','Demond','Dena','Denis','Dennis','Deon','Deondre','Deontae','Deonte','Dereck','Derek','Derick','Deron','Derrick','Deshaun','Deshawn','Desiree','Desmond','Dessie','Destany','Destin','Destinee','Destiney','Destini','Destiny','Devan','Devante','Deven','Devin','Devon','Devonte','Devyn','Dewayne','Dewitt','Dexter','Diamond','Diana','Dianna','Diego','Dillan','Dillon','Dimitri','Dina','Dino','Dion','Dixie','Dock','Dolly','Dolores','Domenic','Domenica','Domenick','Domenico','Domingo','Dominic','Dominique','Don','Donald','Donato','Donavon','Donna','Donnell','Donnie','Donny','Dora','Dorcas','Dorian','Doris','Dorothea','Dorothy','Dorris','Dortha','Dorthy','Doug','Douglas','Dovie','Doyle','Drake','Drew','Duane','Dudley','Dulce','Duncan','Durward','Dustin','Dusty','Dwight','Dylan','Earl','Earlene','Earline','Earnest','Earnestine','Easter','Easton','Ebba','Ebony','Ed','Eda','Edd','Eddie','Eden','Edgar','Edgardo','Edison','Edmond','Edmund','Edna','Eduardo','Edward','Edwardo','Edwin','Edwina','Edyth','Edythe','Effie','Efrain','Efren','Eileen','Einar','Eino','Eladio','Elaina','Elbert','Elda','Eldon','Eldora','Eldred','Eldridge','Eleanora','Eleanore','Eleazar','Electa','Elena','Elenor','Elenora','Eleonore','Elfrieda','Eli','Elian','Eliane','Elias','Eliezer','Elijah','Elinor','Elinore','Elisa','Elisabeth','Elise','Eliseo','Elisha','Elissa','Eliza','Elizabeth','Ella','Ellen','Ellie','Elliot','Elliott','Ellis','Ellsworth','Elmer','Elmira','Elmo','Elmore','Elna','Elnora','Elody','Eloisa','Eloise','Elouise','Eloy','Elroy','Elsa','Else','Elsie','Elta','Elton','Elva','Elvera','Elvie','Elvis','Elwin','Elwyn','Elyse','Elyssa','Elza','Emanuel','Emelia','Emelie','Emely','Emerald','Emerson','Emery','Emie','Emil','Emile','Emilia','Emiliano','Emilie','Emilio','Emily','Emma','Emmalee','Emmanuel','Emmanuelle','Emmet','Emmett','Emmie','Emmitt','Emmy','Emory','Ena','Enid','Enoch','Enola','Enos','Enrico','Enrique','Ephraim','Era','Eriberto','Eric','Erica','Erich','Erick','Ericka','Erik','Erika','Erin','Erling','Erna','Ernest','Ernestina','Ernestine','Ernesto','Ernie','Ervin','Erwin','Eryn','Esmeralda','Esperanza','Esta','Esteban','Estefania','Estel','Estell','Estella','Estelle','Estevan','Esther','Estrella','Etha','Ethan','Ethel','Ethelyn','Ethyl','Ettie','Eudora','Eugene','Eugenia','Eula','Eulah','Eulalia','Euna','Eunice','Eusebio','Eva','Evalyn','Evan','Evangeline','Evans','Eve','Eveline','Evelyn','Everardo','Everett','Everette','Evert','Evie','Ewald','Ewell','Ezekiel','Ezequiel','Ezra','Fabian','Fabiola','Fae','Fannie','Fanny','Fatima','Faustino','Fausto','Favian','Fay','Faye','Federico','Felicia','Felicita','Felicity','Felipa','Felipe','Felix','Felton','Fermin','Fern','Fernando','Ferne','Fidel','Filiberto','Filomena','Finn','Fiona','Flavie','Flavio','Fleta','Fletcher','Flo','Florence','Florencio','Florian','Florida','Florine','Flossie','Floy','Floyd','Ford','Forest','Forrest','Foster','Frances','Francesca','Francesco','Francis','Francisca','Francisco','Franco','Frank','Frankie','Franz','Fred','Freda','Freddie','Freddy','Frederic','Frederick','Frederik','Frederique','Fredrick','Fredy','Freeda','Freeman','Freida','Frida','Frieda','Friedrich','Fritz','Furman','Gabe','Gabriel','Gabriella','Gabrielle','Gaetano','Gage','Gail','Gardner','Garett','Garfield','Garland','Garnet','Garnett','Garret','Garrett','Garrick','Garrison','Garry','Garth','Gaston','Gavin','Gay','Gayle','Gaylord','Gene','General','Genesis','Genevieve','Gennaro','Genoveva','Geo','Geoffrey','George','Georgette','Georgiana','Georgianna','Geovanni','Geovanny','Geovany','Gerald','Geraldine','Gerard','Gerardo','Gerda','Gerhard','Germaine','German','Gerry','Gerson','Gertrude','Gia','Gianni','Gideon','Gilbert','Gilberto','Gilda','Giles','Gillian','Gina','Gino','Giovani','Giovanna','Giovanni','Giovanny','Gisselle','Giuseppe','Gladyce','Gladys','Glen','Glenda','Glenna','Glennie','Gloria','Godfrey','Golda','Golden','Gonzalo','Gordon','Grace','Gracie','Graciela','Grady','Graham','Grant','Granville','Grayce','Grayson','Green','Greg','Gregg','Gregoria','Gregorio','Gregory','Greta','Gretchen','Greyson','Griffin','Grover','Guadalupe','Gudrun','Guido','Guillermo','Guiseppe','Gunnar','Gunner','Gus','Gussie','Gust','Gustave','Guy','Gwen','Gwendolyn','Hadley','Hailee','Hailey','Hailie','Hal','Haleigh','Haley','Halie','Halle','Hallie','Hank','Hanna','Hannah','Hans','Hardy','Harley','Harmon','Harmony','Harold','Harrison','Harry','Harvey','Haskell','Hassan','Hassie','Hattie','Haven','Hayden','Haylee','Hayley','Haylie','Hazel','Hazle','Heath','Heather','Heaven','Heber','Hector','Heidi','Helen','Helena','Helene','Helga','Hellen','Helmer','Heloise','Henderson','Henri','Henriette','Henry','Herbert','Herman','Hermann','Hermina','Herminia','Herminio','Hershel','Herta','Hertha','Hester','Hettie','Hilario','Hilbert','Hilda','Hildegard','Hillard','Hillary','Hilma','Hilton','Hipolito','Hiram','Hobart','Holden','Hollie','Hollis','Holly','Hope','Horace','Horacio','Hortense','Hosea','Houston','Howard','Howell','Hoyt','Hubert','Hudson','Hugh','Hulda','Humberto','Hunter','Hyman','Ian','Ibrahim','Icie','Ida','Idell','Idella','Ignacio','Ignatius','Ike','Ila','Ilene','Iliana','Ima','Imani','Imelda','Immanuel','Imogene','Ines','Irma','Irving','Irwin','Isaac','Isabel','Isabell','Isabella','Isabelle','Isac','Isadore','Isai','Isaiah','Isaias','Isidro','Ismael','Isobel','Isom','Israel','Issac','Itzel','Iva','Ivah','Ivory','Ivy','Izabella','Izaiah','Jabari','Jace','Jacey','Jacinthe','Jacinto','Jack','Jackeline','Jackie','Jacklyn','Jackson','Jacky','Jaclyn','Jacquelyn','Jacques','Jacynthe','Jada','Jade','Jaden','Jadon','Jadyn','Jaeden','Jaida','Jaiden','Jailyn','Jaime','Jairo','Jakayla','Jake','Jakob','Jaleel','Jalen','Jalon','Jalyn','Jamaal','Jamal','Jamar','Jamarcus','Jamel','Jameson','Jamey','Jamie','Jamil','Jamir','Jamison','Jammie','Jan','Jana','Janae','Jane','Janelle','Janessa','Janet','Janice','Janick','Janie','Janis','Janiya','Jannie','Jany','Jaquan','Jaquelin','Jaqueline','Jared','Jaren','Jarod','Jaron','Jarred','Jarrell','Jarret','Jarrett','Jarrod','Jarvis','Jasen','Jasmin','Jason','Jasper','Jaunita','Javier','Javon','Javonte','Jay','Jayce','Jaycee','Jayda','Jayde','Jayden','Jaydon','Jaylan','Jaylen','Jaylin','Jaylon','Jayme','Jayne','Jayson','Jazlyn','Jazmin','Jazmyn','Jazmyne','Jean','Jeanette','Jeanie','Jeanne','Jed','Jedediah','Jedidiah','Jeff','Jefferey','Jeffery','Jeffrey','Jeffry','Jena','Jenifer','Jennie','Jennifer','Jennings','Jennyfer','Jensen','Jerad','Jerald','Jeramie','Jeramy','Jerel','Jeremie','Jeremy','Jermain','Jermaine','Jermey','Jerod','Jerome','Jeromy','Jerrell','Jerrod','Jerrold','Jerry','Jess','Jesse','Jessica','Jessie','Jessika','Jessy','Jessyca','Jesus','Jett','Jettie','Jevon','Jewel','Jewell','Jillian','Jimmie','Jimmy','Jo','Joan','Joana','Joanie','Joanne','Joannie','Joanny','Joany','Joaquin','Jocelyn','Jodie','Jody','Joe','Joel','Joelle','Joesph','Joey','Johan','Johann','Johanna','Johathan','John','Johnathan','Johnathon','Johnnie','Johnny','Johnpaul','Johnson','Jolie','Jon','Jonas','Jonatan','Jonathan','Jonathon','Jordan','Jordane','Jordi','Jordon','Jordy','Jordyn','Jorge','Jose','Josefa','Josefina','Joseph','Josephine','Josh','Joshua','Joshuah','Josiah','Josiane','Josianne','Josie','Josue','Jovan','Jovani','Jovanny','Jovany','Joy','Joyce','Juana','Juanita','Judah','Judd','Jude','Judge','Judson','Judy','Jules','Julia','Julian','Juliana','Julianne','Julie','Julien','Juliet','Julio','Julius','June','Junior','Junius','Justen','Justice','Justina','Justine','Juston','Justus','Justyn','Juvenal','Juwan','Kacey','Kaci','Kacie','Kade','Kaden','Kadin','Kaela','Kaelyn','Kaia','Kailee','Kailey','Kailyn','Kaitlin','Kaitlyn','Kale','Kaleb','Kaleigh','Kaley','Kali','Kallie','Kameron','Kamille','Kamren','Kamron','Kamryn','Kane','Kara','Kareem','Karelle','Karen','Kari','Kariane','Karianne','Karina','Karine','Karl','Karlee','Karley','Karli','Karlie','Karolann','Karson','Kasandra','Kasey','Kassandra','Katarina','Katelin','Katelyn','Katelynn','Katharina','Katherine','Katheryn','Kathleen','Kathlyn','Kathryn','Kathryne','Katlyn','Katlynn','Katrina','Katrine','Kattie','Kavon','Kay','Kaya','Kaycee','Kayden','Kayla','Kaylah','Kaylee','Kayleigh','Kayley','Kayli','Kaylie','Kaylin','Keagan','Keanu','Keara','Keaton','Keegan','Keeley','Keely','Keenan','Keira','Keith','Kellen','Kelley','Kelli','Kellie','Kelly','Kelsi','Kelsie','Kelton','Kelvin','Ken','Kendall','Kendra','Kendrick','Kenna','Kennedi','Kennedy','Kenneth','Kennith','Kenny','Kenton','Kenya','Kenyatta','Kenyon','Keon','Keshaun','Keshawn','Keven','Kevin','Kevon','Keyon','Keyshawn','Khalid','Khalil','Kian','Kiana','Kianna','Kiara','Kiarra','Kiel','Kiera','Kieran','Kiley','Kim','Kimberly','King','Kip','Kira','Kirk','Kirsten','Kirstin','Kitty','Kobe','Koby','Kody','Kolby','Kole','Korbin','Korey','Kory','Kraig','Kris','Krista','Kristian','Kristin','Kristina','Kristofer','Kristoffer','Kristopher','Kristy','Krystal','Krystel','Krystina','Kurt','Kurtis','Kyla','Kyle','Kylee','Kyleigh','Kyler','Kylie','Kyra','Lacey','Lacy','Ladarius','Lafayette','Laila','Laisha','Lamar','Lambert','Lamont','Lance','Landen','Lane','Laney','Larissa','Laron','Larry','Larue','Laura','Laurel','Lauren','Laurence','Lauretta','Lauriane','Laurianne','Laurie','Laurine','Laury','Lauryn','Lavada','Lavern','Laverna','Laverne','Lavina','Lavinia','Lavon','Lavonne','Lawrence','Lawson','Layla','Layne','Lazaro','Lea','Leann','Leanna','Leanne','Leatha','Leda','Lee','Leif','Leila','Leilani','Lela','Lelah','Leland','Lelia','Lempi','Lemuel','Lenna','Lennie','Lenny','Lenora','Lenore','Leo','Leola','Leon','Leonard','Leonardo','Leone','Leonel','Leonie','Leonor','Leonora','Leopold','Leopoldo','Leora','Lera','Lesley','Leslie','Lesly','Lessie','Lester','Leta','Letha','Letitia','Levi','Lew','Lewis','Lexi','Lexie','Lexus','Lia','Liam','Liana','Libbie','Libby','Lila','Lilian','Liliana','Liliane','Lilla','Lillian','Lilliana','Lillie','Lilly','Lily','Lilyan','Lina','Lincoln','Linda','Lindsay','Lindsey','Linnea','Linnie','Linwood','Lionel','Lisa','Lisandro','Lisette','Litzy','Liza','Lizeth','Lizzie','Llewellyn','Lloyd','Logan','Lois','Lola','Lolita','Loma','Lon','London','Lonie','Lonnie','Lonny','Lonzo','Lora','Loraine','Loren','Lorena','Lorenz','Lorenza','Lorenzo','Lori','Lorine','Lorna','Lottie','Lou','Louie','Louisa','Lourdes','Louvenia','Lowell','Loy','Loyal','Loyce','Lucas','Luciano','Lucie','Lucienne','Lucile','Lucinda','Lucio','Lucious','Lucius','Lucy','Ludie','Ludwig','Lue','Luella','Luigi','Luis','Luisa','Lukas','Lula','Lulu','Luna','Lupe','Lura','Lurline','Luther','Luz','Lyda','Lydia','Lyla','Lynn','Lyric','Lysanne','Mabel','Mabelle','Mable','Mac','Macey','Maci','Macie','Mack','Mackenzie','Macy','Madaline','Madalyn','Maddison','Madeline','Madelyn','Madelynn','Madge','Madie','Madilyn','Madisen','Madison','Madisyn','Madonna','Madyson','Mae','Maegan','Maeve','Mafalda','Magali','Magdalen','Magdalena','Maggie','Magnolia','Magnus','Maia','Maida','Maiya','Major','Makayla','Makenna','Makenzie','Malachi','Malcolm','Malika','Malinda','Mallie','Mallory','Malvina','Mandy','Manley','Manuel','Manuela','Mara','Marc','Marcel','Marcelina','Marcelino','Marcella','Marcelle','Marcellus','Marcelo','Marcia','Marco','Marcos','Marcus','Margaret','Margarete','Margarett','Margaretta','Margarette','Margarita','Marge','Margie','Margot','Margret','Marguerite','Maria','Mariah','Mariam','Marian','Mariana','Mariane','Marianna','Marianne','Mariano','Maribel','Marie','Mariela','Marielle','Marietta','Marilie','Marilou','Marilyne','Marina','Mario','Marion','Marisa','Marisol','Maritza','Marjolaine','Marjorie','Marjory','Mark','Markus','Marlee','Marlen','Marlene','Marley','Marlin','Marlon','Marques','Marquis','Marquise','Marshall','Marta','Martin','Martina','Martine','Marty','Marvin','Mary','Maryam','Maryjane','Maryse','Mason','Mateo','Mathew','Mathias','Mathilde','Matilda','Matilde','Matt','Matteo','Mattie','Maud','Maude','Maudie','Maureen','Maurice','Mauricio','Maurine','Maverick','Mavis','Max','Maxie','Maxime','Maximilian','Maximillia','Maximillian','Maximo','Maximus','Maxine','Maxwell','May','Maya','Maybell','Maybelle','Maye','Maymie','Maynard','Mayra','Mazie','Mckayla','Mckenna','Mckenzie','Meagan','Meaghan','Meda','Megane','Meggie','Meghan','Mekhi','Melany','Melba','Melisa','Melissa','Mellie','Melody','Melvin','Melvina','Melyna','Melyssa','Mercedes','Meredith','Merl','Merle','Merlin','Merritt','Mertie','Mervin','Meta','Mia','Micaela','Micah','Michael','Michaela','Michale','Micheal','Michel','Michele','Michelle','Miguel','Mikayla','Mike','Mikel','Milan','Miles','Milford','Miller','Millie','Milo','Milton','Mina','Minerva','Minnie','Miracle','Mireille','Mireya','Misael','Missouri','Misty','Mitchel','Mitchell','Mittie','Modesta','Modesto','Mohamed','Mohammad','Mohammed','Moises','Mollie','Molly','Mona','Monica','Monique','Monroe','Monserrat','Monserrate','Montana','Monte','Monty','Morgan','Moriah','Morris','Mortimer','Morton','Mose','Moses','Moshe','Mossie','Mozell','Mozelle','Muhammad','Muriel','Murl','Murphy','Murray','Mustafa','Mya','Myah','Mylene','Myles','Myra','Myriam','Myrl','Myrna','Myron','Myrtice','Myrtie','Myrtis','Myrtle','Nadia','Nakia','Name','Nannie','Naomi','Naomie','Napoleon','Narciso','Nash','Nasir','Nat','Natalia','Natalie','Natasha','Nathan','Nathanael','Nathanial','Nathaniel','Nathen','Nayeli','Neal','Ned','Nedra','Neha','Neil','Nelda','Nella','Nelle','Nellie','Nels','Nelson','Neoma','Nestor','Nettie','Neva','Newell','Newton','Nia','Nicholas','Nicholaus','Nichole','Nick','Nicklaus','Nickolas','Nico','Nicola','Nicolas','Nicole','Nicolette','Nigel','Nikita','Nikki','Nikko','Niko','Nikolas','Nils','Nina','Noah','Noble','Noe','Noel','Noelia','Noemi','Noemie','Noemy','Nola','Nolan','Nona','Nora','Norbert','Norberto','Norene','Norma','Norris','Norval','Norwood','Nova','Novella','Nya','Nyah','Nyasia','Obie','Oceane','Ocie','Octavia','Oda','Odell','Odessa','Odie','Ofelia','Okey','Ola','Olaf','Ole','Olen','Oleta','Olga','Olin','Oliver','Ollie','Oma','Omari','Omer','Ona','Onie','Opal','Ophelia','Ora','Oral','Oran','Oren','Orie','Orin','Orion','Orland','Orlando','Orlo','Orpha','Orrin','Orval','Orville','Osbaldo','Osborne','Oscar','Osvaldo','Oswald','Oswaldo','Otha','Otho','Otilia','Otis','Ottilie','Ottis','Otto','Ova','Owen','Ozella','Pablo','Paige','Palma','Pamela','Pansy','Paolo','Paris','Parker','Pascale','Pasquale','Pat','Patience','Patricia','Patrick','Patsy','Pattie','Paul','Paula','Pauline','Paxton','Payton','Pearl','Pearlie','Pearline','Pedro','Peggie','Penelope','Percival','Percy','Perry','Pete','Peter','Petra','Peyton','Philip','Phoebe','Phyllis','Pierce','Pierre','Pietro','Pink','Pinkie','Piper','Polly','Porter','Precious','Presley','Preston','Price','Prince','Princess','Priscilla','Providenci','Prudence','Queen','Queenie','Quentin','Quincy','Quinn','Quinten','Quinton','Rachael','Rachel','Rachelle','Rae','Raegan','Rafael','Rafaela','Raheem','Rahsaan','Rahul','Raina','Raleigh','Ralph','Ramiro','Ramon','Ramona','Randal','Randall','Randi','Randy','Ransom','Raoul','Raphael','Raphaelle','Raquel','Rashad','Rashawn','Rasheed','Raul','Raven','Ray','Raymond','Raymundo','Reagan','Reanna','Reba','Rebeca','Rebecca','Rebeka','Rebekah','Reece','Reed','Reese','Regan','Reggie','Reginald','Reid','Reilly','Reina','Reinhold','Remington','Rene','Renee','Ressie','Reta','Retha','Retta','Reuben','Reva','Rex','Rey','Reyes','Reymundo','Reyna','Reynold','Rhea','Rhett','Rhianna','Rhiannon','Rhoda','Ricardo','Richard','Richie','Richmond','Rick','Rickey','Rickie','Ricky','Rico','Rigoberto','Riley','Rita','River','Robb','Robbie','Robert','Roberta','Roberto','Robin','Robyn','Rocio','Rocky','Rod','Roderick','Rodger','Rodolfo','Rodrick','Rodrigo','Roel','Rogelio','Roger','Rogers','Rolando','Rollin','Roma','Romaine','Roman','Ron','Ronaldo','Ronny','Roosevelt','Rory','Rosa','Rosalee','Rosalia','Rosalind','Rosalinda','Rosalyn','Rosamond','Rosanna','Rosario','Roscoe','Rose','Rosella','Roselyn','Rosemarie','Rosemary','Rosendo','Rosetta','Rosie','Rosina','Roslyn','Ross','Rossie','Rowan','Rowena','Rowland','Roxane','Roxanne','Roy','Royal','Royce','Rozella','Ruben','Rubie','Ruby','Rubye','Rudolph','Rudy','Rupert','Russ','Russel','Russell','Rusty','Ruth','Ruthe','Ruthie','Ryan','Ryann','Ryder','Rylan','Rylee','Ryleigh','Ryley','Sabina','Sabrina','Sabryna','Sadie','Sadye','Sage','Saige','Sallie','Sally','Salma','Salvador','Salvatore','Sam','Samanta','Samantha','Samara','Samir','Sammie','Sammy','Samson','Sandra','Sandrine','Sandy','Sanford','Santa','Santiago','Santina','Santino','Santos','Sarah','Sarai','Sarina','Sasha','Saul','Savanah','Savanna','Savannah','Savion','Scarlett','Schuyler','Scot','Scottie','Scotty','Seamus','Sean','Sebastian','Sedrick','Selena','Selina','Selmer','Serena','Serenity','Seth','Shad','Shaina','Shakira','Shana','Shane','Shanel','Shanelle','Shania','Shanie','Shaniya','Shanna','Shannon','Shanny','Shanon','Shany','Sharon','Shaun','Shawn','Shawna','Shaylee','Shayna','Shayne','Shea','Sheila','Sheldon','Shemar','Sheridan','Sherman','Sherwood','Shirley','Shyann','Shyanne','Sibyl','Sid','Sidney','Sienna','Sierra','Sigmund','Sigrid','Sigurd','Silas','Sim','Simeon','Simone','Sincere','Sister','Skye','Skyla','Skylar','Sofia','Soledad','Solon','Sonia','Sonny','Sonya','Sophia','Sophie','Spencer','Stacey','Stacy','Stan','Stanford','Stanley','Stanton','Stefan','Stefanie','Stella','Stephan','Stephania','Stephanie','Stephany','Stephen','Stephon','Sterling','Steve','Stevie','Stewart','Stone','Stuart','Summer','Sunny','Susan','Susana','Susanna','Susie','Suzanne','Sven','Syble','Sydnee','Sydney','Sydni','Sydnie','Sylvan','Sylvester','Sylvia','Tabitha','Tad','Talia','Talon','Tamara','Tamia','Tania','Tanner','Tanya','Tara','Taryn','Tate','Tatum','Tatyana','Taurean','Tavares','Taya','Taylor','Teagan','Ted','Telly','Terence','Teresa','Terrance','Terrell','Terrence','Terrill','Terry','Tess','Tessie','Tevin','Thad','Thaddeus','Thalia','Thea','Thelma','Theo','Theodora','Theodore','Theresa','Therese','Theresia','Theron','Thomas','Thora','Thurman','Tia','Tiana','Tianna','Tiara','Tierra','Tiffany','Tillman','Timmothy','Timmy','Timothy','Tina','Tito','Titus','Tobin','Toby','Tod','Tom','Tomas','Tomasa','Tommie','Toney','Toni','Tony','Torey','Torrance','Torrey','Toy','Trace','Tracey','Tracy','Travis','Travon','Tre','Tremaine','Tremayne','Trent','Trenton','Tressa','Tressie','Treva','Trever','Trevion','Trevor','Trey','Trinity','Trisha','Tristian','Tristin','Triston','Troy','Trudie','Trycia','Trystan','Turner','Twila','Tyler','Tyra','Tyree','Tyreek','Tyrel','Tyrell','Tyrese','Tyrique','Tyshawn','Tyson','Ubaldo','Ulices','Ulises','Una','Unique','Urban','Uriah','Uriel','Ursula','Vada','Valentin','Valentina','Valentine','Valerie','Vallie','Van','Vance','Vanessa','Vaughn','Veda','Velda','Vella','Velma','Velva','Vena','Verda','Verdie','Vergie','Verla','Verlie','Vern','Verna','Verner','Vernice','Vernie','Vernon','Verona','Veronica','Vesta','Vicenta','Vicente','Vickie','Vicky','Victor','Victoria','Vida','Vidal','Vilma','Vince','Vincent','Vincenza','Vincenzo','Vinnie','Viola','Violet','Violette','Virgie','Virgil','Virginia','Virginie','Vita','Vito','Viva','Vivian','Viviane','Vivianne','Vivien','Vivienne','Vladimir','Wade','Waino','Waldo','Walker','Wallace','Walter','Walton','Wanda','Ward','Warren','Watson','Wava','Waylon','Wayne','Webster','Weldon','Wellington','Wendell','Wendy','Werner','Westley','Weston','Whitney','Wilber','Wilbert','Wilburn','Wiley','Wilford','Wilfred','Wilfredo','Wilfrid','Wilhelm','Wilhelmine','Will','Willa','Willard','William','Willie','Willis','Willow','Willy','Wilma','Wilmer','Wilson','Wilton','Winfield','Winifred','Winnifred','Winona','Winston','Woodrow','Wyatt','Wyman','Xander','Xavier','Xzavier','Yadira','Yasmeen','Yasmin','Yasmine','Yazmin','Yesenia','Yessenia','Yolanda','Yoshiko','Yvette','Yvonne','Zachariah','Zachary','Zachery','Zack','Zackary','Zackery','Zakary','Zander','Zane','Zaria','Zechariah','Zelda','Zella','Zelma','Zena','Zetta','Zion','Zita','Zoe','Zoey','Zoie','Zoila','Zola','Zora','Zula'],
      'last_name': ['Abbott','Abernathy','Abshire','Adams','Altenwerth','Anderson','Ankunding','Armstrong','Auer','Aufderhar','Bahringer','Bailey','Balistreri','Barrows','Bartell','Bartoletti','Barton','Bashirian','Batz','Bauch','Baumbach','Bayer','Beahan','Beatty','Bechtelar','Becker','Bednar','Beer','Beier','Berge','Bergnaum','Bergstrom','Bernhard','Bernier','Bins','Blanda','Blick','Block','Bode','Boehm','Bogan','Bogisich','Borer','Bosco','Botsford','Boyer','Boyle','Bradtke','Brakus','Braun','Breitenberg','Brekke','Brown','Bruen','Buckridge','Carroll','Carter','Cartwright','Casper','Cassin','Champlin','Christiansen','Cole','Collier','Collins','Conn','Connelly','Conroy','Considine','Corkery','Cormier','Corwin','Cremin','Crist','Crona','Cronin','Crooks','Cruickshank','Cummerata','Cummings','Dach','D\'Amore','Daniel','Dare','Daugherty','Davis','Deckow','Denesik','Dibbert','Dickens','Dicki','Dickinson','Dietrich','Donnelly','Dooley','Douglas','Doyle','DuBuque','Durgan','Ebert','Effertz','Eichmann','Emard','Emmerich','Erdman','Ernser','Fadel','Fahey','Farrell','Fay','Feeney','Feest','Feil','Ferry','Fisher','Flatley','Frami','Franecki','Friesen','Fritsch','Funk','Gaylord','Gerhold','Gerlach','Gibson','Gislason','Gleason','Gleichner','Glover','Goldner','Goodwin','Gorczany','Gottlieb','Goyette','Grady','Graham','Grant','Green','Greenfelder','Greenholt','Grimes','Gulgowski','Gusikowski','Gutkowski','Gutmann','Haag','Hackett','Hagenes','Hahn','Haley','Halvorson','Hamill','Hammes','Hand','Hane','Hansen','Harber','Harris','Hartmann','Harvey','Hauck','Hayes','Heaney','Heathcote','Hegmann','Heidenreich','Heller','Herman','Hermann','Hermiston','Herzog','Hessel','Hettinger','Hickle','Hilll','Hills','Hilpert','Hintz','Hirthe','Hodkiewicz','Hoeger','Homenick','Hoppe','Howe','Howell','Hudson','Huel','Huels','Hyatt','Jacobi','Jacobs','Jacobson','Jakubowski','Jaskolski','Jast','Jenkins','Jerde','Johns','Johnson','Johnston','Jones','Kassulke','Kautzer','Keebler','Keeling','Kemmer','Kerluke','Kertzmann','Kessler','Kiehn','Kihn','Kilback','King','Kirlin','Klein','Kling','Klocko','Koch','Koelpin','Koepp','Kohler','Konopelski','Koss','Kovacek','Kozey','Krajcik','Kreiger','Kris','Kshlerin','Kub','Kuhic','Kuhlman','Kuhn','Kulas','Kunde','Kunze','Kuphal','Kutch','Kuvalis','Labadie','Lakin','Lang','Langosh','Langworth','Larkin','Larson','Leannon','Lebsack','Ledner','Leffler','Legros','Lehner','Lemke','Lesch','Leuschke','Lind','Lindgren','Littel','Little','Lockman','Lowe','Lubowitz','Lueilwitz','Luettgen','Lynch','Macejkovic','MacGyver','Maggio','Mann','Mante','Marks','Marquardt','Marvin','Mayer','Mayert','McClure','McCullough','McDermott','McGlynn','McKenzie','McLaughlin','Medhurst','Mertz','Metz','Miller','Mills','Mitchell','Moen','Mohr','Monahan','Moore','Morar','Morissette','Mosciski','Mraz','Mueller','Muller','Murazik','Murphy','Murray','Nader','Nicolas','Nienow','Nikolaus','Nitzsche','Nolan','Oberbrunner','O\'Connell','O\'Conner','O\'Hara','O\'Keefe','O\'Kon','Okuneva','Olson','Ondricka','O\'Reilly','Orn','Ortiz','Osinski','Pacocha','Padberg','Pagac','Parisian','Parker','Paucek','Pfannerstill','Pfeffer','Pollich','Pouros','Powlowski','Predovic','Price','Prohaska','Prosacco','Purdy','Quigley','Quitzon','Rath','Ratke','Rau','Raynor','Reichel','Reichert','Reilly','Reinger','Rempel','Renner','Reynolds','Rice','Rippin','Ritchie','Robel','Roberts','Rodriguez','Rogahn','Rohan','Rolfson','Romaguera','Roob','Rosenbaum','Rowe','Ruecker','Runolfsdottir','Runolfsson','Runte','Russel','Rutherford','Ryan','Sanford','Satterfield','Sauer','Sawayn','Schaden','Schaefer','Schamberger','Schiller','Schimmel','Schinner','Schmeler','Schmidt','Schmitt','Schneider','Schoen','Schowalter','Schroeder','Schulist','Schultz','Schumm','Schuppe','Schuster','Senger','Shanahan','Shields','Simonis','Sipes','Skiles','Smith','Smitham','Spencer','Spinka','Sporer','Stamm','Stanton','Stark','Stehr','Steuber','Stiedemann','Stokes','Stoltenberg','Stracke','Streich','Stroman','Strosin','Swaniawski','Swift','Terry','Thiel','Thompson','Tillman','Torp','Torphy','Towne','Toy','Trantow','Tremblay','Treutel','Tromp','Turcotte','Turner','Ullrich','Upton','Vandervort','Veum','Volkman','Von','VonRueden','Waelchi','Walker','Walsh','Walter','Ward','Waters','Watsica','Weber','Wehner','Weimann','Weissnat','Welch','West','White','Wiegand','Wilderman','Wilkinson','Will','Williamson','Willms','Windler','Wintheiser','Wisoky','Wisozk','Witting','Wiza','Wolf','Wolff','Wuckert','Wunsch','Wyman','Yost','Yundt','Zboncak','Zemlak','Ziemann','Zieme','Zulauf']
    };

    var icons = [
      'menu','search','more_vert','place','menu','add','dashboard','recent_actors','chat','format_list_numbered','arrow_drop_down','photo','arrow_drop_up','format_align_left','arrow_drop_up','apps','trending_up','arrow_drop_up','place','arrow_drop_up','chrome_reader_mode','3d_rotation','accessibility','account_balance','account_balance_wallet','account_box','account_circle','add_shopping_cart','alarm','alarm_add','alarm_off','alarm_on','android','announcement','aspect_ratio','assessment','assignment','assignment_ind','assignment_late','assignment_return','assignment_returned','assignment_turned_in','autorenew','backup','book','bookmark','bookmark_border','bug_report','build','cached','camera_enhance','card_giftcard','card_membership','card_travel','change_history','check_circle','chrome_reader_mode','class','code','credit_card','dashboard','delete','description','dns','done','done_all','eject','event','event_seat','exit_to_app','explore','extension','face','favorite','favorite_border','feedback','find_in_page','find_replace','flight_land','flight_takeoff','flip_to_back','flip_to_front','get_app','gif','grade','group_work','help','help_outline','highlight_off','history','home','hourglass_empty','hourglass_full','http','https','info','info_outline','input','invert_colors','label','label_outline','language','launch','list','lock','lock_open','lock_outline','loyalty','markunread_mailbox','note_add','offline_pin','open_in_browser','open_in_new','open_with','pageview','payment','perm_camera_mic','perm_contact_calendar','perm_data_setting','perm_device_information','perm_identity','perm_media','perm_phone_msg','perm_scan_wifi','picture_in_picture','play_for_work','polymer','power_settings_new','print','query_builder','question_answer','receipt','redeem','reorder','report_problem','restore','room','schedule','search','settings','settings_applications','settings_backup_restore','settings_bluetooth','settings_brightness','settings_cell','settings_ethernet','settings_input_antenna','settings_input_component','settings_input_composite','settings_input_hdmi','settings_input_svideo','settings_overscan','settings_phone','settings_power','settings_remote','settings_voice','shop','shop_two','shopping_basket','shopping_cart','speaker_notes','spellcheck','star_rate','stars','store','subject','supervisor_account','swap_horiz','swap_vert','swap_vertical_circle','system_update_alt','tab','tab_unselected','theaters','thumb_down','thumb_up','thumbs_up_down','toc','today','toll','track_changes','translate','trending_down','trending_flat','trending_up','turned_in','turned_in_not','verified_user','view_agenda','view_array','view_carousel','view_column','view_day','view_headline','view_list','view_module','view_quilt','view_stream','view_week','visibility','visibility_off','work','youtube_searched_for','zoom_in','zoom_out','add_alert','error','error_outline','warning','airplay','album','av_timer','closed_caption','equalizer','explicit','fast_forward','fast_rewind','forward_10','forward_30','forward_5','games','hd','hearing','high_quality','library_add','library_books','library_music','loop','mic','mic_none','mic_off','movie','new_releases','not_interested','pause','pause_circle_filled','pause_circle_outline','play_arrow','play_circle_filled','play_circle_outline','playlist_add','queue','queue_music','radio','recent_actors','repeat','repeat_one','replay','replay_10','replay_30','replay_5','shuffle','skip_next','skip_previous','snooze','sort_by_alpha','stop','subtitles','surround_sound','video_library','videocam','videocam_off','volume_down','volume_mute','volume_off','volume_up','web','business','call','call_end','call_made','call_merge','call_missed','call_received','call_split','chat','chat_bubble','chat_bubble_outline','clear_all','comment','contact_phone','contacts','dialer_sip','dialpad','email','forum','import_export','invert_colors_off','live_help','location_off','location_on','message','no_sim','phone','phonelink_erase','phonelink_lock','phonelink_ring','phonelink_setup','portable_wifi_off','present_to_all','ring_volume','speaker_phone','stay_current_landscape','stay_current_portrait','stay_primary_landscape','stay_primary_portrait','swap_calls','textsms','voicemail','vpn_key','add','add_box','add_circle','add_circle_outline','archive','backspace','block','clear','content_copy','content_cut','content_paste','create','drafts','filter_list','flag','font_download','forward','gesture','inbox','link','mail','markunread','redo','remove','remove_circle','remove_circle_outline','reply','reply_all','report','save','select_all','send','sort','text_format','undo','access_alarm','access_alarms','access_time','add_alarm','airplanemode_active','airplanemode_inactive','battery_alert','battery_charging_full','battery_full','battery_std','battery_unknown','bluetooth','bluetooth_connected','bluetooth_disabled','bluetooth_searching','brightness_auto','brightness_high','brightness_low','brightness_medium','data_usage','developer_mode','devices','dvr','gps_fixed','gps_not_fixed','gps_off','graphic_eq','location_disabled','location_searching','network_cell','network_wifi','nfc','screen_lock_landscape','screen_lock_portrait','screen_lock_rotation','screen_rotation','sd_storage','settings_system_daydream','signal_cellular_4_bar','signal_cellular_connected_no_internet_4_bar','signal_cellular_no_sim','signal_cellular_null','signal_cellular_off','signal_wifi_4_bar','signal_wifi_4_bar_lock','signal_wifi_off','storage','usb','wallpaper','widgets','wifi_lock','wifi_tethering','attach_file','attach_money','border_all','border_bottom','border_clear','border_color','border_horizontal','border_inner','border_left','border_outer','border_right','border_style','border_top','border_vertical','format_align_center','format_align_justify','format_align_left','format_align_right','format_bold','format_clear','format_color_fill','format_color_reset','format_color_text','format_indent_decrease','format_indent_increase','format_italic','format_line_spacing','format_list_bulleted','format_list_numbered','format_paint','format_quote','format_size','format_strikethrough','format_textdirection_l_to_r','format_textdirection_r_to_l','format_underlined','functions','insert_chart','insert_comment','insert_drive_file','insert_emoticon','insert_invitation','insert_link','insert_photo','merge_type','mode_comment','mode_edit','money_off','publish','space_bar','strikethrough_s','vertical_align_bottom','vertical_align_center','vertical_align_top','wrap_text','attachment','cloud','cloud_circle','cloud_done','cloud_download','cloud_off','cloud_queue','cloud_upload','file_download','file_upload','folder','folder_open','folder_shared','cast','cast_connected','computer','desktop_mac','desktop_windows','developer_board','device_hub','dock','gamepad','headset','headset_mic','keyboard','keyboard_arrow_down','keyboard_arrow_left','keyboard_arrow_right','keyboard_arrow_up','keyboard_backspace','keyboard_capslock','keyboard_hide','keyboard_return','keyboard_tab','keyboard_voice','laptop','laptop_chromebook','laptop_mac','laptop_windows','memory','mouse','phone_android','phone_iphone','phonelink','phonelink_off','power_input','router','scanner','security','sim_card','smartphone','speaker','speaker_group','tablet','tablet_android','tablet_mac','toys','tv','watch','add_to_photos','adjust','assistant','assistant_photo','audiotrack','blur_circular','blur_linear','blur_off','blur_on','brightness_1','brightness_2','brightness_3','brightness_4','brightness_5','brightness_6','brightness_7','broken_image','brush','camera','camera_alt','camera_front','camera_rear','camera_roll','center_focus_strong','center_focus_weak','collections','collections_bookmark','color_lens','colorize','compare','control_point','control_point_duplicate','crop','crop_16_9','crop_3_2','crop_5_4','crop_7_5','crop_din','crop_free','crop_landscape','crop_original','crop_portrait','crop_square','dehaze','details','edit','exposure','exposure_neg_1','exposure_neg_2','exposure_plus_1','exposure_plus_2','exposure_zero','filter','filter_1','filter_2','filter_3','filter_4','filter_5','filter_6','filter_7','filter_8','filter_9','filter_9_plus','filter_b_and_w','filter_center_focus','filter_drama','filter_frames','filter_hdr','filter_none','filter_tilt_shift','filter_vintage','flare','flash_auto','flash_off','flash_on','flip','gradient','grain','grid_off','grid_on','hdr_off','hdr_on','hdr_strong','hdr_weak','healing','image','image_aspect_ratio','iso','landscape','leak_add','leak_remove','lens','looks','looks_3','looks_4','looks_5','looks_6','looks_one','looks_two','loupe','monochrome_photos','movie_creation','music_note','nature','nature_people','navigate_before','navigate_next','palette','panorama','panorama_fish_eye','panorama_horizontal','panorama_vertical','panorama_wide_angle','photo','photo_album','photo_camera','photo_library','photo_size_select_actual','photo_size_select_large','photo_size_select_small','picture_as_pdf','portrait','remove_red_eye','rotate_90_degrees_ccw','rotate_left','rotate_right','slideshow','straighten','style','switch_camera','switch_video','tag_faces','texture','timelapse','timer','timer_10','timer_3','timer_off','tonality','transform','tune','view_comfy','view_compact','vignette','wb_auto','wb_cloudy','wb_incandescent','wb_iridescent','wb_sunny','beenhere','directions','directions_bike','directions_boat','directions_bus','directions_car','directions_railway','directions_run','directions_subway','directions_transit','directions_walk','flight','hotel','layers','layers_clear','local_activity','local_airport','local_atm','local_bar','local_cafe','local_car_wash','local_convenience_store','local_dining','local_drink','local_florist','local_gas_station','local_grocery_store','local_hospital','local_hotel','local_laundry_service','local_library','local_mall','local_movies','local_offer','local_parking','local_pharmacy','local_phone','local_pizza','local_play','local_post_office','local_printshop','local_see','local_shipping','local_taxi','map','my_location','navigation','person_pin','pin_drop','place','rate_review','restaurant_menu','satellite','store_mall_directory','terrain','traffic','apps','arrow_back','arrow_drop_down','arrow_drop_down_circle','arrow_drop_up','arrow_forward','cancel','check','chevron_left','chevron_right','close','expand_less','expand_more','fullscreen','fullscreen_exit','menu','more_horiz','more_vert','refresh','adb','airline_seat_flat','airline_seat_flat_angled','airline_seat_individual_suite','airline_seat_legroom_extra','airline_seat_legroom_normal','airline_seat_legroom_reduced','airline_seat_recline_extra','airline_seat_recline_normal','bluetooth_audio','confirmation_number','disc_full','do_not_disturb','do_not_disturb_alt','drive_eta','event_available','event_busy','event_note','folder_special','live_tv','mms','more','network_locked','ondemand_video','personal_video','phone_bluetooth_speaker','phone_forwarded','phone_in_talk','phone_locked','phone_missed','phone_paused','power','sd_card','sim_card_alert','sms','sms_failed','sync','sync_disabled','sync_problem','system_update','tap_and_play','time_to_leave','vibration','voice_chat','vpn_lock','wc','wifi','cake','domain','group','group_add','location_city','mood','mood_bad','notifications','notifications_active','notifications_none','notifications_off','notifications_paused','pages','party_mode','people','people_outline','person','person_add','person_outline','plus_one','poll','public','school','share','whatshot','check_box','check_box_outline_blank','indeterminate_check_box','radio_button_checked','radio_button_unchecked','star','star_border','star_half'
    ];


    var img = [
      'ad.svg', 'button.svg', 'converse.svg', 'fire extinguisher.svg', 'lamp.svg', 'passport.svg', 'skate.svg',
      'theatre.svg', 'turntable.svg', 'wacom.svg', 'bill.svg', 'buzzer.svg','conveyor.svg', 'helmet.svg', 'luggage.svg',
      'presentation.svg','smart watch.svg', 'tie.svg', 'umbrella.svg', 'workspace.svg', 'bowling.svg', 'calculator.svg',
      'demoltion.svg', 'icecream.svg', 'microscope.svg', 'server.svg', 'switcher.svg', 'tower.svg', 'vespa.svg', 'wrench.svg'
    ];

    var colors = [
      'pink','red','purple','indigo','blue',
      'light-blue','cyan','teal','green','light-green',
      'lime','yellow','amber','orange','deep-orange'
    ];
    var colorVariation = [
      '300', '400', '500', '600', '700'
    ];



    function randomInt ( min, max ) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return {

      randomColor: function(){
        return colors[randomInt(0, colors.length-1)];
      },

      createFirstname: function(){
        return name.first_name[randomInt(0, name.first_name.length - 1)];
      },

      createLastname: function(){
        return name.last_name[randomInt(0, name.last_name.length - 1)];
      },

      createIcon: function(color){
        color = color || false;

        if(!color){
          return '<i class="material-icons">'+icons[randomInt(0, icons.length - 1)]+'</i>';
        }

        var c = 'mdl-color-text--'+colors[randomInt(0, colors.length-1)]+'-'+colorVariation[randomInt(0, colorVariation.length-1)];

        return '<i class="material-icons '+c+'">'+icons[randomInt(0, icons.length - 1)]+'</i>';
      },

      createImg: function(){
        return img[randomInt(0, img.length - 1)];
      },

      createName: function(){
        return this.createFirstname()+' '+this.createLastname();
      },

      createSentence: function ( sentenceLength ) {
        var wordIndex,
          sentence;

        // Determine how long the sentence should be. Do it randomly if one was not
        // provided.
        sentenceLength = sentenceLength || randomInt( 5, 20 );

        // Now we determine were we are going to start in the array randomly. We
        // are just going to take a slice of the array, so we have to ensure
        // whereever we start has enough places left in the array to accommodate
        // the random sentence length from above.
        wordIndex = randomInt(0, words.length - sentenceLength - 1);

        // And pull out the words, join them together, separating words by spaces
        // (duh), and removing any commas that may appear at the end of the
        // sentence. Finally, add a period.
        sentence = words.slice(wordIndex, wordIndex + sentenceLength)
          .join(' ')
          .replace(/\,$/g, '') + '.';

        // Capitalize the first letter - it is a sentence, after all.
        sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

        return sentence;
      },
      createSentences: function ( numSentences ) {
        var sentences = [],
          i = 0;

        // Determine how many sentences we should do. Do it randomly if one was not
        // provided.
        numSentences = numSentences || randomInt( 3, 5 );

        // For each paragraph, we should generate between 3 and 5 sentences.
        for ( i = 0; i < numSentences; i++ ) {
          sentences.push( this.createSentence() );
        }

        // And then we just return the array of sentences, concatenated with spaces.
        return sentences.join( ' ' );
      },
      createParagraph: function ( numSentences, html ) {
        var sentences = this.createSentences( numSentences );

        // Make the sentences into a paragraph and return.
        if(html){
          return '<p>' + sentences + '</p>';
        }

        return sentences + "\n";
      },
      createParagraphs: function ( numParagraphs, numSentences, html ) {
        var paragraphs = [],
          i = 0;

        numParagraphs = numParagraphs || randomInt( 3, 7 );

        // Create the number of paragraphs requested.
        for ( i = 0; i < numParagraphs; i++ ) {
          paragraphs.push( this.createParagraph( numSentences, html ) );
        }

        // Return the paragraphs, concatenated with newlines.
        return paragraphs.join( '\n' );
      }
    };
  })

  .directive( 'placeholderText', [ 'PlaceholderTextService', function ( PlaceholderTextService ) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs, ngModel) {

        numParagraphs = attrs.sentences || 1;
        numSentences = attrs.paragraphs || 6;
        html = attrs.html || true;

        element.html(
          PlaceholderTextService.createParagraphs(numParagraphs, numSentences, true)
        );

      }
    };
  }])

  .directive( 'placeholderTitle', [ 'PlaceholderTextService', function ( PlaceholderTextService ) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        element.html(
          PlaceholderTextService.createSentence(5)
        );
      }
    };
  }])

  .directive( 'placeholderName', [ 'PlaceholderTextService', function ( PlaceholderTextService ) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs, ngModel) {
        element.html(
          PlaceholderTextService.createName()
        );
      }
    };
  }])

  .directive( 'placeholderP', [ 'PlaceholderTextService', function ( PlaceholderTextService ) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs, ngModel) {
        element.html(
          PlaceholderTextService.createParagraph(1, 3, false)
        );
      }
    };
  }])

  .directive( 'placeholderImg', [ 'PlaceholderTextService', function ( PlaceholderTextService ) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs, ngModel) {
        element.attr('src', 'assets/img/icons/ballicons/'+PlaceholderTextService.createImg());
      }
    };
  }])

  .directive( 'placeholderIcon', [ 'PlaceholderTextService', function ( PlaceholderTextService ) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs, ngModel) {
        element.html(
          PlaceholderTextService.createIcon(false)
        );
      }
    };
  }])

  .directive( 'placeholderForm', [ 'PlaceholderTextService', function ( PlaceholderTextService ) {
    return {
      restrict: 'C',
      link: function(scope, element, attrs, ngModel) {

        angular.forEach(element.find('input, textarea'), function(el){
          elem = angular.element(el);

          switch (el.type) {
            case 'textarea':
              elem.text(PlaceholderTextService.createParagraphs(1, 4));
              break;
            case 'text':
              elem.attr('value', PlaceholderTextService.createSentence());
              break;
            case 'password':
              elem.attr('value', 'nakama?');
              break;
            case 'checkbox':
              elem.attr('checked','checked');
              break;
          }

          if(elem.val()){
            elem.parent().addClass('filled');
          }
        });

      }
    };
  }])


  .directive( 'placeholderImage', function () {
    return {
      restrict: 'A',
      scope: { dimensions: '@placeholderImage' },
      link: function( scope, element, attr ) {

        // A reference to a canvas that we can reuse
        var canvas;
        var config = {
          text_size: 10,
          fill_color: '#EEEEEE',
          text_color: '#AAAAAA'
        };

        /**
         * When the provided dimensions change, re-pull the width and height and
         * then redraw the image.
         */
        scope.$watch('dimensions', function () {
          if( ! angular.isDefined( scope.dimensions ) ) {
            return;
          }
          var matches = scope.dimensions.match( /^(\d+)x(\d+)$/ ),
            dataUrl;

          if(  ! matches ) {
            console.error('Expected \'000x000\'. Got ' + scope.dimensions);
            return;
          }

          // Grab the provided dimensions.
          scope.size = { w: matches[1], h: matches[2] };

          // FIXME: only add these if not already present
          element.prop( 'title', scope.dimensions );
          element.prop( 'alt', scope.dimensions );

          // And draw the image, getting the returned data URL.
          dataUrl = drawImage();

          // If this is an `img` tag, set the src as the data URL. Else, we set
          // the CSS `background-image` property to same.
          if ( element.prop( 'tagName' ) === 'IMG' ) {
            element.prop( 'src', dataUrl );
          } else {
            element.css( 'background-image', 'url("' + dataUrl + '")' );
          }
        });

        /**
         * Calculate the maximum height of the text we can draw, based on the
         * requested dimensions of the image.
         */
        function getTextSize() {
          var dimension_arr = [scope.size.h, scope.size.w].sort(),
            maxFactor = Math.round(dimension_arr[1] / 16);

          return Math.max(config.text_size, maxFactor);
        }

        /**
         * Using the HTML5 canvas API, draw a placeholder image of the requested
         * size with text centered vertically and horizontally that specifies its
         * dimensions. Returns the data URL that can be used as an `img`'s `src`
         * attribute.
         */
        function drawImage() {
          // Create a new canvas if we don't already have one. We reuse the canvas
          // when if gets redrawn so as not to be wasteful.
          canvas = canvas || document.createElement( 'canvas' );

          // Obtain a 2d drawing context on which we can add the placeholder
          // image.
          var context = canvas.getContext( '2d' ),
            text_size,
            text;

          // Set the canvas to the appropriate size.
          canvas.width = scope.size.w;
          canvas.height = scope.size.h;

          // Draw the placeholder image square.
          // TODO: support other shapes
          // TODO: support configurable colors
          context.fillStyle = config.fill_color;
          context.fillRect( 0, 0, scope.size.w, scope.size.h );

          // Add the dimension text.
          // TODO: support configurable font
          // FIXME: ensure text will fit and resize if it doesn't
          text_size = getTextSize();
          text = scope.dimensions;
          context.fillStyle = config.text_color;
          context.textAlign = 'center';
          context.textBaseline = 'middle';
          context.font = 'bold '+text_size+'pt sans-serif';

          // If the text is too long to fit, reduce it until it will.
          if (context.measureText( text ).width / scope.size.w > 1) {
            text_size = config.text_size / (context.measureText( text ).width / scope.size.w);
            context.font = 'bold '+text_size+'pt sans-serif';
          }

          // Finally, draw the text in its calculated position.
          context.fillText( scope.dimensions, scope.size.w / 2, scope.size.h / 2 );

          // Get the data URL and return it.
          return canvas.toDataURL('image/png');
        }
      }
    };
  });