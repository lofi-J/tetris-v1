import { useCallback, useState } from 'react';

import { TETROMINOS, randomTetromino } from '../../constants';
import { STAGE_WIDTH, checkCollision } from '../../gameHelpers';

export const usePlayer = (stage) => {
    const [player, setPlayer] = useState({
        pos:  {x: 0, y: 0 },
        tetromino: TETROMINOS[0].shape,
        collide: false
    });
    
    const rotate = (matrix, dir) => {
        const rotateTetromino = matrix.map((_, index) => matrix.map (col => col[index]));

        if(dir > 0) return rotateTetromino.map(row => row.reverse());
        return rotateTetromino.reverse();
    }
    
    const playerRotate = (stage, dir) => {
        const clonedPlayer = JSON.parse(JSON.stringify(player));
        clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir);

        const pos = clonedPlayer.pos.x;
        let offset = 1;
        while(checkCollision(clonedPlayer, stage, { x: 0, y: 0})) {
            clonedPlayer.pos.x += offset;
            offset =- (offset + (offset > 0 ? 1 : -1));
            if(offset > clonedPlayer.tetromino[0].length) {
                rotate(clonedPlayer.tetromino, -dir);
                clonedPlayer.pos.x = pos;
                return;
            }
        }

        setPlayer(clonedPlayer);
    }

    const updatePlayerPos = ({ x, y, collide }) => {
        setPlayer(prev => ({
            ...prev,
            pos: { x: (prev.pos.x += x), y: (prev.pos.y += y)},
            collide
        }))
    }

    const resetPlayer = useCallback(() => {
        setPlayer({
            pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
            tetromino: randomTetromino().shape,
            collide: false,
        })
    }, [])    

    return [player, updatePlayerPos, resetPlayer, playerRotate];
}