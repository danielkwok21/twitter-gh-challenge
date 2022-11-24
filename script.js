let inputEl = document.querySelectorAll('[placeholder="Search Twitter"]')[0]
let parentEl = inputEl.parentElement
parentEl.style.display = 'flex'
parentEl.style.alignItems = 'center'

let tokenizedEl = document.createElement('div')
tokenizedEl.style.backgroundColor = 'lightblue'
tokenizedEl.style.padding = '5px 15px'
tokenizedEl.style.borderRadius = '50px'
tokenizedEl.id = 'tokenizedEl'

let dropDownEl, newDropDownEl, dropDownElParent

document.addEventListener('keyup', (e) => {
    let newInputEl = document.getElementById('newInputEl')

    const isSpecial = inputEl.value.startsWith('from:')

    if (isSpecial && !newInputEl) {
        tokenizedEl.innerHTML = "from:"
        parentEl.prepend(tokenizedEl)
        inputEl.remove()

        newInputEl = document.createElement('input')
        newInputEl.id = 'newInputEl'
        newInputEl.classList.add("r-30o5oe", "r-1niwhzg", "r-17gur6a", "r-1yadl64", "r-homxoj", "r-poiln3", "r-7cikom", "r-1ny4l3l", "r-xyw6el", "r-y0fyvk", "r-1dz5y72", "r-fdjqy7", "-13qz1uu")
        parentEl.append(newInputEl)
        newInputEl.focus()

        dropDownEl = document.getElementById('typeaheadDropdown-1')
        if(dropDownEl){
            dropDownElParent = dropDownEl.parentElement
            dropDownEl.remove()
        }
    }


    if (newInputEl) {

        const prevDropDownEl = document.getElementById('newDropDownEl')
        if (prevDropDownEl) {
            prevDropDownEl.remove()
        }

        newDropDownEl = document.createElement('div')
        newDropDownEl.id = 'newDropDownEl'
        newDropDownEl.innerHTML = `
        <div aria-multiselectable="false" role="listbox"
    class="css-1dbjc4n r-150rngu r-14lw9ot r-1xfd6ze r-1upvrn0 r-1d2f490 r-8fhv3p r-h3f8nf r-1rnoaur r-1r851ge r-u8s1d r-zchlnj r-ipm5af"
    style="width: 306px;" id="typeaheadDropdown-1">
    ${[
                {
                    name: 'John doe',
                    handle: '@johndoe',
                    followerCount: '500k'
                },
                {
                    name: 'Jane Doe',
                    handle: '@janedoe',
                    followerCount: '15k'
                },
                {
                    name: 'Ahmed Boron',
                    handle: '@boronA',
                    followerCount: '500k'
                },
                {
                    name: 'Godzilla',
                    handle: '@godzilla',
                    followerCount: '1m'
                },
                {
                    name: 'KingKong',
                    handle: '@kingk',
                    followerCount: '2m'
                }
            ]
                .filter(user => {
                    if (newInputEl.value) {
                        return user.name.toUpperCase().includes(newInputEl.value.toUpperCase())
                    } else {
                        return true
                    }

                })
                .map(user => {
                    return (
                        `
                <div role="option" aria-selected="false" class="css-1dbjc4n" data-testid="typeaheadResult">
        <div role="button" tabindex="0" class="css-18t94o4 css-1dbjc4n r-6dt33c r-1ny4l3l r-o7ynqc r-6416eg">
            <div role="button" tabindex="0" class="css-18t94o4 css-1dbjc4n r-1ny4l3l r-ymttw5 r-1f1sjgu"
                data-testid="TypeaheadUser">
                <div class="css-1dbjc4n r-18u37iz">
                    <div class="css-1dbjc4n r-1iusvr4 r-16y2uox">
                        <div class="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep">
                            <div class="css-1dbjc4n r-1wbh5a2 r-dnmrzs r-1ny4l3l">
                                <div class="css-1dbjc4n r-1wbh5a2 r-dnmrzs r-1ny4l3l">
                                    <div class="css-1dbjc4n r-1wbh5a2 r-dnmrzs r-1ny4l3l">
                                        <div class="css-1dbjc4n r-1awozwy r-18u37iz r-dnmrzs">
                                            <div dir="auto"
                                                class="css-901oao r-1awozwy r-18jsvk2 r-6koalj r-37j5jr r-a023e6 r-b88u0q r-rjixqe r-bcqeeo r-1udh08x r-3s2u2q r-qvutc0">
                                                <span
                                                    class="css-901oao css-16my406 css-1hf3ou5 r-poiln3 r-bcqeeo r-qvutc0"><span
                                                        class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">${user.name} </span></span>
                                            </div>
                                            <div dir="auto"
                                                class="css-901oao r-18jsvk2 r-xoduu5 r-18u37iz r-1q142lx r-37j5jr r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-qvutc0">
                                                <svg viewBox="0 0 24 24" aria-label="Verified account" role="img"
                                                    class="r-1cvl2hr r-4qtqp9 r-yyyyoo r-1xvli5t r-9cviqr r-f9ja8p r-og9te1 r-bnwqim r-1plcrui r-lrvibr">
                                                    <g>
                                                        <path
                                                            d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z">
                                                        </path>
                                                    </g>
                                                </svg></div>
                                        </div>
                                    </div>
                                    <div class="css-1dbjc4n r-1awozwy r-18u37iz r-1wbh5a2">
                                        <div tabindex="-1" class="css-1dbjc4n r-1wbh5a2 r-dnmrzs r-1ny4l3l">
                                            <div class="css-1dbjc4n">
                                                <div dir="ltr"
                                                    class="css-901oao css-1hf3ou5 r-14j79pv r-18u37iz r-37j5jr r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-qvutc0">
                                                    <span
                                                        class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">${user.handle}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="css-1dbjc4n r-1awozwy r-18u37iz r-n04z8z">
                            <div class="css-1dbjc4n r-1q142lx"><svg viewBox="0 0 24 24" aria-hidden="true"
                                    class="r-14j79pv r-4qtqp9 r-yyyyoo r-tbmifm r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-16eto9q">
                                    <g>
                                        <path
                                            d="M17.863 13.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44zM12 2C9.791 2 8 3.79 8 6s1.791 4 4 4 4-1.79 4-4-1.791-4-4-4z">
                                        </path>
                                    </g>
                                </svg></div>
                            <div dir="auto"
                                class="css-901oao css-1hf3ou5 r-14j79pv r-37j5jr r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-nk90ef r-qvutc0">
                                <span dir="ltr" class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0"><span
                                        class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">${user.followerCount}
                                        Followers</span></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
                `
                    )
                })
                .join('')
            }`

        dropDownElParent.append(newDropDownEl)
    }

    if (newInputEl) {
        let queryString = newInputEl.value
        if (queryString.length === 0 && e.code === 'Backspace') {
            console.log('exiting token')

            tokenizedEl.remove()
            newInputEl.remove()
            newDropDownEl.remove()
            parentEl.append(inputEl)
            inputEl.focus()
        }
    }
});
