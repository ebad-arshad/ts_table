var API_KEY = "https://api.quran.com/api/v4/chapters";
var table_body = document.getElementById("table_body");
// bismillah_pre : false
// id : 1
// name_arabic : "الفاتحة"
// name_complex : "Al-Fātiĥah"
// name_simple : "Al-Fatihah"
// pages : [1, 1]
// revelation_order : 5
// revelation_place : "makkah"
// translated_name : {language_name: 'english', name: 'The Opener'}
// verses_count : 7
fetch(API_KEY)
    .then(function (res) { return res.json(); })
    .then(function (res) {
    res.chapters.map(function (chapters, index) {
        return (table_body.innerHTML += "\n    <tr>\n    <th scope=\"row\">".concat(chapters.id, "</th>\n    <td>").concat(chapters.name_simple, "</td>\n    <td>").concat(chapters.name_arabic, "</td>\n    <td>").concat(chapters.revelation_place, "</td>\n    <td>").concat(chapters.verses_count, "</td>\n    </tr>"));
    });
    console.log(res.chapters);
})
    .catch(function (err) { return console.log(err); });
/*
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
*/
