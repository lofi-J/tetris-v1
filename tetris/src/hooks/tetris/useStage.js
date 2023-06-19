import { useState, useEffect } from "react";

import { checkCollision, createStage } from "../../gameHelpers";

export const useStage = (player, resetPlayer) => {
    const [stage, setStage] = useState(createStage());
    const [rowsCleared, setRowsCleared] = useState(0);    
    const [ghostPositions, setGhostPositions] = useState([]);



    useEffect( () => {
        setRowsCleared(0);

        const sweepRows = newStage => 
            newStage.reduce((ack, row) => {
                if(row.findIndex(cell => cell[0] === 0) ===-1) {
                    setRowsCleared(prev => prev + 1);
                    ack.unshift(new Array(newStage[0].length).fill([0, 'clear']));
                    return ack;
                }
                ack.push(row);
                return ack;
            }, []);

        const calculateGhostPos = (stage) => {
            let ghostPos = [];
            const clonedPlayer = JSON.parse(JSON.stringify(player));
            
            for(let i=0; i<20; i++) {
                if(checkCollision(clonedPlayer, stage, {x: 0, y: 1})) {
                    break;
                } else {
                    clonedPlayer.pos.y += 1;
                }
            }
            
            const calculatedPos = {...clonedPlayer.pos};

            clonedPlayer.tetromino.forEach((row, y) => {
                row.forEach((value, x) => {
                    if(value !== 0) {
                        ghostPos.push({x: x + calculatedPos.x, y: y + calculatedPos.y});
                    }   
                })
            })
            
            // player가 ghost와 만나기전에 고스트 블럭을 지우기
            ghostPos.forEach((value) => {
                if(value.y <= player.pos.y+3) {
                    ghostPos = [];
                    return;
                }
            })
            
            return ghostPos;
        }
        // Ghost Position 
        setGhostPositions(calculateGhostPos(stage));

        const updateStage = prevStage => {
            const newStage = prevStage.map(row => row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell)));
            
            player.tetromino.forEach((row, y) => {
                row.forEach((value, x) => {
                    if(value !== 0) {
                        newStage[y + player.pos.y][x + player.pos.x] = [value, `${player.collide ? 'merged' : 'clear'}`];
                    }
                })
            });
            
            //충돌 감지시 새 블럭 생성
            if(player.collide) {  
                resetPlayer() 
                return sweepRows(newStage);
            }
            return newStage;
        }
        
        // Update Block Position as Stage State
        setStage(prev => updateStage(prev));

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [player, resetPlayer]);

    return [stage, setStage, rowsCleared, ghostPositions];
}