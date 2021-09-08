import {
    SetAuthorFirstPerson, SetAuthorsAction,
    SetAuthorSecondPerson,
    SetDepartment,
    SetDescriptionAbout,
    SetDescriptionOption,
    SetDescriptionTitle,
    SetFooter, SetReviewersAction,
    SetReviewsFirstPerson,
    SetReviewsSecondPerson,
    SetSubtitle,
    setTitle
} from "../redux/actions/input";


export const UseSwitchDispatch = (type : string, dispatch : any, text : string, color : string, children?: string): void => {
    switch (type) {
        case 'title':
            if((children !== text || color !== 'black')){
                if(color){
                    dispatch(setTitle(text,color));
                } else {
                    dispatch(setTitle(text,'black'));
                }
            }
            break;
        case 'subtitle':
            if((children !== text || color !== 'black')){
                if(color){
                    dispatch(SetSubtitle(text,color));
                } else {
                    dispatch(SetSubtitle(text,'black'));
                }
            }
            break;
        case 'department':
            if((children !== text || color !== 'black')){
                if(color){
                    dispatch(SetDepartment(text,color));
                } else {
                    dispatch(SetDepartment(text,'black'));
                }
            }
            break;
        case 'authorFirstPerson':
            if((children !== text || color !== 'black')){
                if(color){
                    dispatch(SetAuthorFirstPerson(text,color));
                } else {
                    dispatch(SetAuthorFirstPerson(text,'black'));
                }
            }
            break;
        case 'authorSecondPerson':
            if((children !== text || color !== 'black')){
                if(color){
                    dispatch(SetAuthorSecondPerson(text,color));
                } else {
                    dispatch(SetAuthorSecondPerson(text,'black'));
                }
            }
            break;
        case'descriptionOption' :
            if((children !== text || color !== 'black')){
                if(color){
                    dispatch(SetDescriptionOption(text,color));
                } else {
                    dispatch(SetDescriptionOption(text,'black'));
                }
            }
            break;
        case 'descriptionTitle':
            if((children !== text || color !== 'black')){
                if(color){
                    dispatch(SetDescriptionTitle(text,color));
                } else {
                    dispatch(SetDescriptionTitle(text,'black'));
                }
            }
            break;
        case 'footer':
            if((children !== text || color !== 'black')){
                if(color){
                    dispatch(SetFooter(text,color));
                } else {
                    dispatch(SetFooter(text,'black'));
                }
            }
            break;
        case 'reviewersFirstPerson':
            if((children !== text || color !== 'black')){
                if(color){
                    dispatch(SetReviewsFirstPerson(text,color));
                } else {
                    dispatch(SetReviewsFirstPerson(text,'black'));
                }
            }
            break;
        case 'reviewersSecondPerson':
            if((children !== text || color !== 'black')){
                if(color){
                    dispatch(SetReviewsSecondPerson(text,color));
                } else {
                    dispatch(SetReviewsSecondPerson(text,'black'));
                }
            }
            break;
        case 'descriptionAbout':
            if((children !== text || color !== 'black')){
                if(color){
                    dispatch(SetDescriptionAbout(text,color));
                } else {
                    dispatch(SetDescriptionAbout(text,'black'));
                }
            }
            break;
        case 'authorsAction':
            if((children !== text || color !== 'black')){
                if(color){
                    dispatch(SetAuthorsAction(text,color));
                } else {
                    dispatch(SetAuthorsAction(text,'black'));
                }
            }
            break;
        case 'reviewersAction':
            if((children !== text || color !== 'black')){
                if(color){
                    dispatch(SetReviewersAction(text,color));
                } else {
                    dispatch(SetReviewersAction(text,'black'));
                }
            }
            break;
        default :
            alert(type);
    }
}