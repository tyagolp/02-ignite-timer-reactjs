import { Play } from "phosphor-react";
import { HomeContainer } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <form>
                <div>
                    <label htmlFor="task">Vou trabalher em</label>
                    <input id="task" type="text" />

                    <label htmlFor="minutesAmount">durante</label>
                    <input id="minutesAmount" type="text" />

                    <span>minutos.</span>
                </div>

                <div>
                    <span>0</span>
                    <span>0</span>
                    <span>:</span>
                    <span>0</span>
                    <span>0</span>
                </div>

                <button type="submit">
                    <Play size={24} />
                    Comerçar
                </button>
            </form>
        </HomeContainer>
    )
}
