import Loadable from 'react-loadable';
import React from 'react';
//代码分割
const loadingComponent = () => {
    return (
        <div>
            loading...
        </div>
    )
};

export default (loader) => Loadable({
    loader,
    loading: loadingComponent
});