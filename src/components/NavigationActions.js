
const router = {
    type : 'tab',

    getStateForAction(state, action) {
        switch (action.type) {
          case 'NAVIGATE': {
            const index = state.routes.findIndex(
              route => route.name === action.payload.name
            );
    
            if (index === -1) {
              return null;
            }
    
            return { ...state, index };
          }
    
          default:
            return BaseRouter.getStateForAction(state, action);
        }
      },
}

const SimpleRouter = () => router;

export default SimpleRouter;