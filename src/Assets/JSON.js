import img1 from "../Assets/img1.png"
import img2 from "../Assets/img2.jpg"
import img3 from "../Assets/img3.jpg"
import img4 from "../Assets/img4.jpg"
import img5 from "../Assets/img5.jpg"




const orders =  [
        {
          stage: 'NEW ORDERS',
          results: [
            {
              image: img2,
              time: '5 days left',
              hours: '20 hrs',
              price: '$320',
              status: 'NEW ORDER',
              message: {
                name: 'Soniya',
                image: img1
              }
            },
            {
              image: img3,
              time: '3 days left',
              hours: '4 hrs',
              price: '$85',
              status: 'NEW ORDER',
              message: {
                name: 'Soniya',
                image: img1
              }
            }
          ]
        },
        {
          stage: 'IN PROGRESS',
          results: [
            {
              image: img4,
              time: 'Due in 2 days, 5 hrs',
              hours: '5 hrs',
              price: '$155',
              status: 'IN PROGRESS',
              message: {
                name: 'Soniya',
                reply: 0,
                image: img1
              }
            },
            {
              image: img5,
              time: 'Due in 3 days, 2hrs',
              hours: '8 hrs',
              price: '$385',
              status: 'IN PROGRESS',
              message: {
                name: 'John',
                reply: 1,
                draft: 0,
                image: img1
              }
            }
          ]
        },
        {
          stage: 'WAITING FOR BUYER',
          results: [
            {
              image: img2,
              time: '3 days left',
              hours: '3 hrs',
              price: '$385',
              status: 'DELIVERED',
              message: {
                name: 'Michal',
                image: img1
              }
            }
          ]
        },
        {
          stage: 'COMPLETED',
          results: [
            {
              image: img3,
              time: 'DEC 12, 9:43PM',
              price: '$346',
              status: 'COMPLETED',
              message: {
                name: 'Michal',
                image: img1
              }
            },
            {
              image: img2,
              time: 'DEC 13, 8:21PM',
              price: '$320',
              status: 'COMPLETED',
              message: {
                name: 'Michal',
                image: img1
              }
            },
            {
              image: img5,
              time: 'DEC 12, 9:43PM',
              hours: '20 hrs',
              price: '$385',
              status: 'CANCELLED',
              message: {
                name: 'Kat',
                image: img1
              }
            }
          ]
        }
      ]

      export default orders;
