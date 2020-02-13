// ==UserScript==
// @name         Quizlet Dark Mode
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Dark mode for Quizlet Learn
// @author       Drew Snow
// @match        *://quizlet.com/*
// @match        *://*.quizlet.com
// @match        *://*.quizlet.com/*
// @grant        none
// ==/UserScript==

!function () {
    let style = document.createElement('style'),
        href = window.location.href;

    if (href.includes('/learn')) {
        style.textContent = `
            .UIContainer, .SiteHeader, .ModeLayout {
                background-color: #171717 !important;
            }

            .AssistantRevealSelfAssessmentQuestionView-flashcardWrapper {
                background-color: #474747 !important;
            }

            .UIKeyboardHint-text {
                background-color: transparent !important;
            }

            .AssistantScrollableViewLayout-content, .AssistantViewController, .FlippableFlashcard-back, .FlippableFlashcard-front, .AssistantRevealSelfAssessmentQuestionView-actionArea {
                background-color: #2b2b2b !important;
                color: #eee !important;
            }

            .ModeControls {
                background-color: #2b2b2b !important;
                color: #eee !important;
            }

            .ModeControls-blurTop, .ModeControls-blurBottom, .AssistantScrollableViewLayout-topBlur, .AssistantScrollableViewLayout-bottomBlur, .AssistantScrollableTermViewLayout-bottomBlur, .AssistantCheckpointView-bucketBlur, .UIScrollableFrame-gradientBot, .UIScrollableFrame-gradientTop {
                opacity: 0;
            }

            .UIButton--whiteBorder {
                background-color: #545454 !important;
            }

            .AssistantCheckpointView {
                background-color: #2b2b2b !important;
            }

            .AssistantCheckpointBucketedTermButton, .SetPageTerm {
                background-color: #3f3f3f !important;
            }

            .AssistantCheckpointView-buckets {
                background-color: #232323;
            }

            .UISwitch-label {
                background-color: #545454;
            }

            .SetPageTerm-wordText, . {
                color: #eee !important;
            }

            .AutoExpandTextarea-wrapper {
                color: #fff;
            }

            .FlashcardQuestionView-actionArea, .FlashcardQuestionView-flashcardWrapper {
                background-color: rgba(0, 0, 0, 0.1);
            }
            
            .FlippableFlashcard-flipTip {
                z-index: 10;
            }
        `;
    } else if (href.includes('/flashcards')) {
        style.textContent = `
            .UIContainer, .SiteHeader, .ModeLayout {
                background-color: #171717 !important;
            }

            .AssistantRevealSelfAssessmentQuestionView-flashcardWrapper {
                background-color: #474747 !important;
            }

            .ModeControls {
                background-color: #2b2b2b !important;
                color: #eee !important;
            }

            .ModeControls-blurTop, .ModeControls-blurBottom, .AssistantScrollableViewLayout-topBlur, .AssistantScrollableViewLayout-bottomBlur {
                opacity: 0;
            }

            .UIButton--whiteBorder {
                background-color: #545454 !important;
            }

            .ModeControls-actions {
                background-color: transparent;
            }

            .CardsItemInner {
                background-color: #2b2b2b !important;
                color: #eee;
            }

            .CardsItemImage-background {
                background-color: #171717;
            }

            .UISwitch-label {
                background-color: #545454;
            }
        `;
    } else if (href.includes('/write')) {
        style.textContent = `
            .UIContainer, .SiteHeader, .ModeLayout {
                background-color: #171717 !important;
            }

            .AssistantScrollableViewLayout-content, .AssistantViewController, .FlippableFlashcard-back, .FlippableFlashcard-front, .AssistantRevealSelfAssessmentQuestionView-actionArea, .UIKeyboardHint {
                background-color: #2b2b2b !important;
                color: #eee !important;
            }

            .ModeControls {
                background-color: #2b2b2b !important;
                color: #eee !important;
            }

            .ModeControls-actions {
                background-color: transparent;
            }

            .ModeControls-blurTop, .ModeControls-blurBottom, .AssistantScrollableViewLayout-topBlur, .AssistantScrollableViewLayout-bottomBlur {
                opacity: 0;
            }

            .UIButton--whiteBorder {
                background-color: #545454 !important;
            }

            .LearnModeMain {
                background-color: #2b2b2b !important;
                color: #eee !important;
            }

            .UITextarea-textarea {
                color: #fff;
            }

            .LearnModeTable-row:not(:first-of-type) {
                border-top: .125rem solid #2e2e2e !important;
            }
        `;
    } else if (href.includes('/spell')) {
        style.textContent = `
            .UIContainer, .SiteHeader, .ModeLayout {
                background-color: #171717 !important;
            }

            .AssistantScrollableViewLayout-content, .AssistantViewController, .FlippableFlashcard-back, .FlippableFlashcard-front, .AssistantRevealSelfAssessmentQuestionView-actionArea, .UIKeyboardHint {
                background-color: #2b2b2b !important;
                color: #eee !important;
            }

            .ModeControls {
                background-color: #2b2b2b !important;
                color: #eee !important;
            }

            .ModeControls-blurTop, .ModeControls-blurBottom, .AssistantScrollableViewLayout-topBlur, .AssistantScrollableViewLayout-bottomBlur {
                opacity: 0;
            }

            .UIButton--whiteBorder {
                background-color: #545454 !important;
            }

            .SpellModeLayout-view {
                background-color: #2b2b2b !important;
                color: #eee;
            }

            .SpellModeInputView-prompt:not(:empty) {
                border-top: .125rem solid #2e2e2e !important;
            }

            .UITextarea-textarea {
                color: #fff;
            }
        `;
    } else if (href.includes('/test')) {
        style.textContent = `
            .UIContainer, .SiteHeader, .ModeLayout {
                background-color: #171717 !important;
            }

            .AssistantScrollableViewLayout-content, .AssistantViewController, .FlippableFlashcard-back, .FlippableFlashcard-front, .AssistantRevealSelfAssessmentQuestionView-actionArea, .UIKeyboardHint {
                background-color: #2b2b2b !important;
                color: #eee !important;
            }

            .ModeControls {
                background-color: #2b2b2b !important;
                color: #eee !important;
            }

            .ModeControls-blurTop, .ModeControls-blurBottom, .AssistantScrollableViewLayout-topBlur, .AssistantScrollableViewLayout-bottomBlur {
                opacity: 0;
            }

            .ModeControls-actions {
                background-color: transparent;
            }

            .UIButton--whiteBorder {
                background-color: #545454 !important;
            }

            .TestModePage-sections {
                background-color: #2b2b2b !important;
                color: #eee;
            }

            .AutoExpandTextarea-textarea, .UIInput-input {
                color: #fff;
            }
        `;
    } else if (href.includes('/match')) {
        style.textContent = `
            .UIContainer, .SiteHeader, .ModeLayout {
                background-color: #171717 !important;
            }

            .AssistantScrollableViewLayout-content, .AssistantViewController, .FlippableFlashcard-back, .FlippableFlashcard-front, .AssistantRevealSelfAssessmentQuestionView-actionArea, .UIKeyboardHint {
                background-color: #2b2b2b !important;
                color: #eee !important;
            }

            .ModeControls {
                background-color: #2b2b2b !important;
                color: #eee !important;
            }

            .ModeControls-blurTop, .ModeControls-blurBottom, .AssistantScrollableViewLayout-topBlur, .AssistantScrollableViewLayout-bottomBlur {
                opacity: 0;
            }

            .ModeControls-actions {
                background-color: transparent;
            }

            .UIButton--whiteBorder {
                background-color: #545454 !important;
            }

            .MatchModeInstructionsModal, .MatchModeQuestionGridBoard-tile, .MatchModeQuestionScatterTile, .MatchModeQuestionGridTile {
                background-color: #2b2b2b !important;
                color: #eee;
            }

            .MatchModeQuestionGridTile-content {
                background-color: rgba(0, 0, 0, 0.7);
            }

            .MatchModeQuestionScatterTile {
                border: .125rem solid #2e2e2e !important;
            }

            .AutoExpandTextarea-textarea, .UIInput-input {
                color: #fff;
            }
        `;
    } else if (href.includes('/gravity')) {
        style.textContent = `
            .UIContainer, .SiteHeader, .ModeLayout {
                background-color: #171717 !important;
            }

            .AssistantScrollableViewLayout-content, .AssistantViewController, .FlippableFlashcard-back, .FlippableFlashcard-front, .AssistantRevealSelfAssessmentQuestionView-actionArea, .UIKeyboardHint {
                background-color: #2b2b2b !important;
                color: #eee !important;
            }

            .ModeControls {
                background-color: #2b2b2b !important;
                color: #eee !important;
            }

            .ModeControls-blurTop, .ModeControls-blurBottom, .AssistantScrollableViewLayout-topBlur, .AssistantScrollableViewLayout-bottomBlur {
                opacity: 0;
            }

            .UIButton--whiteBorder {
                background-color: #545454 !important;
            }

            .UIModalBody, .UIToggle-optionLabel, .UIDropdown {
                background-color: #2b2b2b !important;
                color: #eee !important;
            }
        `;
    } else {
        style.textContent = `
            .UIContainer, .SiteHeader, .ModeLayout {
                background-color: #171717 !important;
            }

            .AssistantScrollableViewLayout-content, .AssistantViewController, .FlippableFlashcard-back, .FlippableFlashcard-front, .AssistantRevealSelfAssessmentQuestionView-actionArea, .UIKeyboardHint {
                background-color: #2b2b2b !important;
                color: #eee !important;
            }

            .ModeControls {
                background-color: #2b2b2b !important;
                color: #eee !important;
            }

            .ModeControls-blurTop, .ModeControls-blurBottom, .AssistantScrollableViewLayout-topBlur, .AssistantScrollableViewLayout-bottomBlur {
                opacity: 0;
            }

            .SetPage-setIntro {
                background-color: #2b2b2b !important;
                color: #eee;
            }

            .SiteAd {
                opacity: 0;
            }

            .CardsItemInner, .SetPage-setDetailsTermsWrapper {
                background-color: #171717 !important;
                color: #fff;
            }

            .SetPageModeButton {
                background-color: transparent;
                color: #eee;
            }

            .SetPage-terms {
                background-color: #2b2b2b !important;
                color: #eee;
            }

            .SetPageTerm {
                background-color: #4d4d4d;
            }

            .SetPageTerm-wordText, .SetPageTerm-definitionText {
                color: #eee;
            }

            .SetPage-setDetailsInfoWrapper, .SetPage-setInfo, .SetPageInformation-headerContainer, .SetPageHeader {
                background-color: #111 !important;
            }

            .SetPage-setIntroWrapper {
                background-color: #101010 !important;
            }
        `;
    }
    document.head.appendChild(style);
}();

