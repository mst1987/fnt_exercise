export const errorMessages = {
  cabinet: {
    width: [
      {
        type: 'required',
        message: 'Die Breite ist ein Pflichtfeld'
      },
      {
        type: 'min',
        message: 'Die Breite muss mindestens 1 betragen'
      },
      {
        type: 'max',
        message: 'Die Breite darf maximal 30 betragen'
      }
    ],
    height: [
      {
        type: 'required',
        message: 'Die Höhe ist ein Pflichtfeld'
      },
      {
        type: 'min',
        message: 'Die Höhe muss mindestens 1 betragen'
      },
      {
        type: 'max',
        message: 'Die Höhe darf maximal 50 betragen'
      }
    ]
  },
  device: {
    width: [
      {
        type: 'required',
        message: 'Die Breite ist ein Pflichtfeld'
      },
      {
        type: 'min',
        message: 'Die Breite muss mindestens 1 betragen'
      },
      {
        type: 'max',
        message: 'Die Breite darf maximal 30 betragen'
      }
    ],
    height: [
      {
        type: 'required',
        message: 'Die Höhe ist ein Pflichtfeld'
      },
      {
        type: 'min',
        message: 'Die Höhe muss mindestens 1 betragen'
      },
      {
        type: 'max',
        message: 'Die Höhe darf maximal 30 betragen'
      }
    ]
  }
};
