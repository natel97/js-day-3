const choose =
  options =>
    function * (n) {
      let i = 0
      while (i++ < n) {
        yield options[Math.floor(Math.random() * options.length)]
      }
    }

const options = {
  locations: ['Memphis', 'Phoenix', 'Columbus'],
  instructors: ['Will', 'Michael', 'Yolanda'],
  seasons: ['Spring', 'Summer', 'Winter', 'Fall'],
  activities: ['lecture', 'quizes', 'presentations', 'assignments', 'assessments']
}

export const locations = choose(options.locations)
export const instructors = choose(options.instructors)
export const seasons = choose(options.seasons)
export const activities = choose(options.activities)


// [{
//  classroom: 'Memphis',
//  lead: 'Will',
//  sessions: [{
//    session: 'Fall',
//    activities: [
//      'lecture',
//      'quizes',
//      'presentations'
//    ]
//  }]}]
export const data =
  (classes = 5, sessions = 4, activities = 10) =>
    // Array that objects which have a location, instructor, season, activities
