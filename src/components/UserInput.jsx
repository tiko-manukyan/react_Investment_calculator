import {useState} from "react";
export default function UserInput( { onChangeInputValue, userInput } ) {
    return <section id='user-input'>
        <div className='input-group'>
            <p>
                <label>Initial Investments</label>
                <input
                    type="number"
                    required
                    value={userInput.initialInvestment}
                    onChange={(e) =>
                        onChangeInputValue('initialInvestments', e.target.value)
                }
                />
            </p>
            <p>
                <label>Annual Investments</label>
                <input
                    type="number"
                    required
                    value={userInput.annualInvestment}
                    onChange={(e) =>
                        onChangeInputValue('annualInvestments', e.target.value)
                }
                />
            </p>
        </div>
        <div className='input-group'>
            <p>
                <label>Expected Return</label>
                <input
                    type="number"
                    required
                    value={userInput.expectedReturn}
                    onChange={(e) =>
                        onChangeInputValue('expectedReturn', e.target.value)
                }
                />
            </p>
            <p>
                <label>Duration</label>
                <input
                    type="number"
                    required
                    value={userInput.duration}
                    onChange={(e) =>
                        onChangeInputValue('duration', e.target.value)
                }
                />
            </p>
        </div>
    </section>
}