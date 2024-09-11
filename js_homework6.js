/* Опис ДЗ: Уявімо собі, що ми є власниками великої компанії,
 яка розробляє платформу для продажу квитків. 
 Окрім того, наша компанія продає рішення для організації продажу цих квитків.
  Таким чином, у нас будуть клієнти, які придбають наше програмне забезпечення (ПО). 
  По суті, ці клієнти будуть подібні до "дочірніх компаній" (subCompany), які вже використовують наше ПО для продажу квитків.
 Крім цього, ці "дочірні компанії" також можуть стати постачальниками цього рішення, і в цьому випадку вони вже будуть 
 "внучатами компанії" (subSubCompany), і так далі і далі Вам необхідно написати функцію findValueByKey(companyName), 
 яка буде приймати значення у вигляді companyName та надавати інформацію про цю subCompany.

*/
 
 
const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
      {
        name: 'Клієнт 1',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків',
        partners: [
          {
            name: 'Клієнт 1.1',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
          },
          {
            name: 'Клієнт 1.2',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
              {
                name: 'Клієнт 1.2.3',
                type: 'subSubCompany',
                uses: 'Рішення для продажу квитків',
                sells: 'Рішення для продажу квитків',
              }
            ]
          }
        ]
      },
      {
        name: 'Клієнт 2',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків'
      }
    ]
  };
function findValueByKey(companyName){
   
    function searchCompany(company){
        if(company.name === companyName){
            return company
        }
        if (company.clients) {
            for (let client of company.clients) {
                const found = searchCompany(client);
                if (found) {
                    return found;
    }
   }  
  }
        if (company.partners) {
            for (let partner of company.partners) {
                const found = searchCompany(partner);
                if (found) {
                    return found;

     }
    }
   }
  } 
  return searchCompany(company);
 }

console.log(findValueByKey('Клієнт 1.2'));