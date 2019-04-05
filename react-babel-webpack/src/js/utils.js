
/* Utils
–––––––––––––––––––––––––––––––––––––––––––––––––– */

/**
 * Sort by numeric - compare func for array .sort()
 * @param   {Number}  First value for comparison
 * @param   {Number}  Second value for comparison
 * @returns {Array}   The sorted array (in place)
 */

const compareNumbers = (a, b) => a - b


/**
 * Randomise an array
 * @param   {Array}   The array to shuffle
 * @returns {Array}   The shuffled array (in place)
 */

const fisherYatesShuffle = (array) => {
  let j, x 
  for (let i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    x = array[i]
    array[i] = array[j]
    array[j] = x
  }
  return array
}


/**
 * Helper for adding/removing css classes
 * From https://vanillajstoolkit.com/helpers/animate/
 * @param  {Node}    Element to animate
 * @param  {String}  CSS class to apply
 * @param  {Boolean} If true, apply the hide class
 */

// From https://vanillajstoolkit.com/helpers/animate/
const animateCSSHelper = function (elem, animation, hide) {

  // If there's no element or animation, do nothing
  if (!elem || !animation) return

  elem.classList.remove('hide')
  elem.classList.add(animation)
  // Detect when the animation ends
  elem.addEventListener('animationend', function endAnimation (event) {
    elem.classList.remove(animation)
    if (hide) {
      elem.classList.add('hide')
    }
    elem.removeEventListener('animationend', endAnimation, false)
  }, false)
}


/**
 * Get random integer
 * @param   {Number}  Min range
 * @param   {Number}  Max range
 * @returns {Number}  Number between min and max range
 */

const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}


/**
 * Get random decimal
 * @param   {Number}  Min range
 * @param   {Number}  Max range
 * @returns {Number}  Decimal between min and max range
 */

const getRandomDecimal = (min, max) => {
    const num = (Math.random() * (max - min) + min).toFixed(2)
    return parseFloat(num)
}



const user = {
    id: 101,
    email: 'jack@dev.com',
    personalInfo: {
        name: 'Jack',
        address: [
           'westwish st',
           'washmasher',
           'wallas',
            'WX'
       ]
    }
}



const arrVERSION = [

  {
    id: 'title',
    content: '...'
  },
  {
    id: 'personalStatement',
    content: [
      '...',
      '...',
      'and ...'
    ]
  },
  {
    id: 'education',
    content: '...'
  },
  {
    id: 'workHistory',
    content: '...',
    jobs: [
      {
        company: 'Euk',
        date: '2000 - 2000',
        title: 'designer/developer',
        role: '...',
      },
      {
        company: 'Euk2',
        date: '2002 - 2002',
        title: 'gg/gg',
        role: '...',
      },
      {
        company: 'Euk4',
        date: '2004 - 2004',
        title: 'designexxxxr/devexxxxloper',
        role: '...',
      }
    ]
  },
  {
    id: 'Contact',
    links: [
      {
        title: 'Github',
        url: 'https://git...'
      },
      {
        title: 'linkedin',
        url: 'https://git...'
      }
    ]
  }

]

//////////// for arrays

// return arr of just the jobs dates
var dates = arrVERSION.filter(obj => obj.jobs)
                      .map(obj => obj.jobs.map(obj => obj.date))
                      .reduce((arr, obj) => arr.concat(obj), []) 


const cvData = {

  name: 'Patrick Jones',

  title: [
    '... title data',
    'more of it'
  ],
  statement: [
    'personal statement data',
    'more of it'
  ],
  education: [
    'education',
    'more of it',
    'more of more'
  ],
  title: [
    '... title data',
    'more of it'
  ],
  title: [
    '... title data',
    'more of it'
  ],
  workHistory: [
    {
      company: 'Euk',
      date: '2000 - 2000',
      title: 'designer/developer',
      role: '...',
    },
    {
      company: 'Euk2',
      date: '2002 - 2002',
      title: 'gg/gg',
      role: '...',
    },
    {
      company: 'Euk4',
      date: '2004 - 2004',
      title: 'designexxxxr/devexxxxloper',
      role: '...',
    }
  ],
  contact: [
    '... contact data',
    'contact contact contact contact'
  ],
  links: [
    {
      title: 'Github',
      url: 'https://git...'
    },
    {
      title: 'linkedin',
      url: 'https://git...'
    }
  ]

}


const getNestedObject = (nestedObj, pathArr) => {
  return pathArr.reduce((obj, key) =>
    (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
}
// pass in your object structure as array elements
const title = getNestedObject(cvData, ['title']);
console.log(title)
// to access nested array, just pass in array index as an element the path array.
const firstJob = getNestedObject(cvData, ['workHistory', 0, 'company'] );
// this will return the city from the first address item.
console.log(firstJob)














  const copyToClipboard = (str) => {
      /* ——— Derived from: https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f
             improved to add iOS device compatibility——— */

      const el = document.createElement('textarea'); // Create a <textarea> element

      let storeContentEditable = el.contentEditable;
      let storeReadOnly = el.readOnly;

      el.value = str; // Set its value to the string that you want copied
      el.contentEditable = true;
      el.readOnly = false;
      el.setAttribute('readonly', false); // Make it readonly false for iOS compatability
      el.setAttribute('contenteditable', true); // Make it editable for iOS
      el.style.position = 'absolute';
      el.style.left = '-9999px'; // Move outside the screen to make it invisible
      document.body.appendChild(el); // Append the <textarea> element to the HTML document
      const selected =
          document.getSelection().rangeCount > 0 // Check if there is any content selected previously
              ? document.getSelection().getRangeAt(0) // Store selection if found
              : false; // Mark as false to know no selection existed before
      el.select(); // Select the <textarea> content
      el.setSelectionRange(0, 999999);
      document.execCommand('copy'); // Copy - only works as a result of a user action (e.g. click events)
      document.body.removeChild(el); // Remove the <textarea> element
      if (selected) {
          // If a selection existed before copying
          document.getSelection().removeAllRanges(); // Unselect everything on the HTML document
          document.getSelection().addRange(selected); // Restore the original selection
      }

      el.contentEditable = storeContentEditable;
      el.readOnly = storeReadOnly;
  }





// returns multiple arrays out of a single arr
function chunk(array, size) {
  return array.reduce((chunks, item, i) => {
    if (i % size === 0) {
      chunks.push([item]);
    } else {  
      chunks[chunks.length - 1].push(item);
    }
    return chunks;
  }, []);
}








