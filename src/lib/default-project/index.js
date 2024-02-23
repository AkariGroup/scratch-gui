import * as projectJson from './project.json';

/* eslint-disable import/no-unresolved */
// import wav1 from '!arraybuffer-loader!./83a9787d4cb6f3b7632b4ddfebf74367.wav';
// import wav2 from '!arraybuffer-loader!./83c36d806dc92327b9e7049a565c6bff.wav';
import svg1 from '!raw-loader!./cd21514d0531fdffb22204e0ec5ed84a.svg';
// import svg2 from '!raw-loader!./bcf454acf82e4504149f7ffe07081dbc.svg';
// import svg3 from '!raw-loader!./0fb9be3e8397c983338cb71dc84d0b25.svg';
/* eslint-enable import/no-unresolved */


//wav
// const wavDict = {
//     '83a9787d4cb6f3b7632b4ddfebf74367' : wav1,
//     '83c36d806dc92327b9e7049a565c6bff' : wav2
// };

//svg
const svgDict = {
    'cd21514d0531fdffb22204e0ec5ed84a' : svg1,
    // 'bcf454acf82e4504149f7ffe07081dbc' : svg2,
    // '0fb9be3e8397c983338cb71dc84d0b25' : svg3
};

const jsonCompose = (rawJson) => {
    return {
        id: 0,
        assetType: 'Project',
        dataFormat: 'JSON',
        data: JSON.stringify(rawJson.default)
    }
};

const wavCompose = () => {
    const wavs = [];
    for (let key in wavDict) {
        const item = {
            id: key,
            assetType: 'Sound',
            dataFormat: 'WAV',
            data: new Uint8Array(wavDict[key])
        };
        wavs.push(item);
    }
    return wavs;
};

const svgCompose = () => {
    let _TextEncoder;
    if (typeof TextEncoder === 'undefined') {
        _TextEncoder = require('text-encoding').TextEncoder;
    }else{
        _TextEncoder = TextEncoder;
    }
    const encoder = new _TextEncoder();
    const svgs = [];
    for (let key in svgDict) {
        const item = {
            id: key,
            assetType: 'ImageVector',
            dataFormat: 'SVG',
            data: encoder.encode(svgDict[key])
        };
        svgs.push(item);
    }
    return svgs;
}

const defaultProject = translator => {
    const assetArr = [jsonCompose(projectJson)];
    // assetArr.concat(wavCompose());
    assetArr.concat(svgCompose());
    return assetArr;
};

export default defaultProject;
