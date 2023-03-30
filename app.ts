let API_KEY: string = "https://api.quran.com/api/v4/chapters";
const table_body = document.getElementById("table_body")! as HTMLTableElement;

type DataObject = {
  bismillah_pre: boolean;
  id: number;
  name_arabic: string;
  name_complex: string;
  name_simple: string;
  pages: number[];
  revelation_order: number;
  revelation_place: string;
  translated_name: { language_name: string; name: string };
  verses_count: number;
};

fetch(API_KEY)
  .then((res) => res.json())
  .then((res) => {
    res.chapters.map(
      (chapters: DataObject, index: number) =>
        (table_body.innerHTML += 
          `
          <tr>  
            <th scope="row">${chapters.id}</th>
            <td>${chapters.name_simple}</td>
            <td>${chapters.name_arabic}</td>
            <td>${chapters.revelation_place}</td>
            <td>${chapters.verses_count}</td>
          </tr>
          `)
    );
  })
  .catch((err) => console.log(err));
