import { useState } from 'react';

type Props = {
    name: string;
};

export const App = ({ name }: Props) => {
    return (
        <>
            <h1>Wsparcie Pracy - Prettier, Husky, Lint-Staged</h1>
            <h2>{name}</h2>
        </>
    );
};

export default App;
