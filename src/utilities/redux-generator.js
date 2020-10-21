const fs = require('fs')

const input = process.argv[2]

if (process.argv.length < 3) {
  // eslint-disable-next-line
  console.log(
    '\x1b[36m%s\x1b[0m',
    'npm run redux User',
    ' - You must pass name with capitalize first letter',
  )
}

if (process.argv.length >= 3) {
  // Actions

  fs.appendFile(
    `src/redux/actions/${process.argv[2]}Actions.js`,
    `import { ${process.argv[2].toUpperCase()}_CHANGE_BOOL } from '../actionTypes/${
      process.argv[2]
    }ActionTypes';

export const changeBool = resource => dispatch => {
    dispatch({
    type: ${process.argv[2].toUpperCase()}_CHANGE_BOOL,
    payload: resource,
    });
};
`,
    (err) => {
      if (err) throw err
      // eslint-disable-next-line
      console.log('\x1b[36m%s\x1b[0m', 'create', `src\\redux\\actions\\${input}Actions.js`)
    },
  )

  // Action Types

  fs.appendFile(
    `src/redux/actionTypes/${process.argv[2]}ActionTypes.js`,
    `export const ${process.argv[2].toUpperCase()}_CHANGE_BOOL = '${process.argv[2].toUpperCase()}_CHANGE_BOOL';
`,
    (err) => {
      if (err) throw err
      // eslint-disable-next-line
      console.log('\x1b[36m%s\x1b[0m', 'create', `src\\redux\\actionTypes\\${input}ActionTypes.js`)
    },
  )

  // Reducers

  fs.appendFile(
    `src/redux/reducers/${process.argv[2]}Reducer.js`,
    `import { ${process.argv[2].toUpperCase()}_CHANGE_BOOL } from '../actionTypes/${
      process.argv[2]
    }ActionTypes';

const initialState = {
    /** insert ${process.argv[2]} state here */
    bool: false,
};

export default (state = initialState, action) => {
    const { payload } = action;

    switch (action.type) {
    case ${process.argv[2].toUpperCase()}_CHANGE_BOOL:
        return {bool: payload};

    default:
        return state;
    }
};
`,
    (err) => {
      if (err) throw err
      // eslint-disable-next-line
      console.log('\x1b[36m%s\x1b[0m', 'create', `src\\redux\\reducers\\${input}Reducer.js`)
    },
  )

  // Selectors

  fs.appendFile(
    `src/redux/selectors/${process.argv[2]}Selectors.js`,
    `export const select${
      process.argv[2]
    } = state => state.${process.argv[2].toLocaleLowerCase()};`,
    (err) => {
      if (err) throw err
      // eslint-disable-next-line
      console.log('\x1b[36m%s\x1b[0m', 'create', `src\\redux\\selectors\\${input}Selectors.js`)
    },
  )
}
