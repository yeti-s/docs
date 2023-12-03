👀 [Yeti Docs](https://yeti-s.github.io/)

기존에 개발을 진행하면서 이전에 이용했던 기술에 대하여 다시금 사용해야 할 때가 종종 있었어요. 
그럴 때마다 예전 코드를 보며 기억을 상기하는 것이 생각보다 불편한 경험이더라고요. 
그래서 개발을 진행하며 공부한 내용이나 사용한 기술에 대해 정리하는 것이 필요하다고 느껴졌습니다. 

이미 많은 템플릿과 블로그 플랫폼이 존재하지만, 3차원 포인트 클라우드 데이터를 화면에 올리던가 하는 작업이 필요할 것이라고 생각했어요. 
그래서 직접 커스텀할 수 있는 문서 사이트를 하나 만들기로 했습니다. 

해당 페이지는 [Gatsby Theme Document](https://www.gatsbyjs.com/plugins/gatsby-theme-document/)를 기반으로 생성되었습니다.
기반만 가져다가 쓴 것이고 많은 업데이트를 진행해서 거의 새로 만들었다고 볼 수 있으니 업데이트 이력을 아래에 적어둘게요.
따로 추적관리하기 편할 거예요. 

# 업데이트 내역
`현재 버전 : 2.0.0`

## 버전 2

**2.0.0 업데이트**
> 기존 `Gatsby Theme Document`는 `Gatsby V2` 최신 버전의 패키지를 추가하는 부분에서 어려움을 겪었습니다.
이에 추후 확장성을 위해 최신 버전으로 업그레이드가 필요하다고 판단하여 `Gatsby V5`로 업데이트를 진행하였습니다.
버전의 차이가 크게 났기 때문에 많은 변경 사항이 발생하였고 호환되지 않는 부분이 많아 대부분의 기능을 새로 작성해야 하는 소요가 발생하였습니다.
이 기회에 기존의 `javascript` 기반으로 이루어진 모듈을 `typescript` 기반으로 변경하여 효율 또한 높이고자 하였습니다.
이에 따라 현재까지 작성한 문서의 일부가 기존 형식과 맞지 않을 수 있습니다.

* Gatsby v5, Typescript 기반으로 변경하였습니다.
* 모든 컴포넌트를 `Atomic Design` 패턴에 맞춰 새로 구성하였습니다.

> 여러 기기에서 사용할 수 있도록 화면 크기에 따라 더욱 부드럽게 레이아웃을 변경하였습니다.
또한 일부 기능을 추가하였습니다.

* 테마가 Light, Dark 두 가지로 변경됩니다.
* 좌측 사이드바의 하위 목록이 부드럽게 나타나도록 변경하였습니다.
* 화면 크기가 변경함에 따라 좌우 사이드바가 축소하고 확장하도록 변경하였습니다.
* 좌측 사이드바가 축소하였을 때 생성되는 메뉴 버튼이 부드럽게 나타나도록 변경하였습니다.
* 문서 내용의 넓이를 확장 축소하는 버튼을 추가하였습니다.
* 인스타그램 버튼을 추가하였습니다.

> `.mdx`파일을 사용하여 생성된 내용들의 UI에 많은 변화를 주었습니다.
기본적으로 github의 스타일과 비슷하게 유지하였고, 일부는 문서 양식에 맞게 변경한 부분도 있습니다.

* 문서 제목 부위에 유저와 수정된 날짜가 표기됩니다.
* `Heading`의 크기와 구분선의 위치가 변경됩니다.
* 기존 인용 블럭이 작동되지 않던 오류를 수정하였습니다.
* 기존 붉은 글씨로 변하던 Code 형식이 `이와 같이` 표현됩니다.
* Code Block이 Dark 테마에 맞춰 색을 변경합니다.


## 버전 1
**1.1.3 업데이트**
* 일부 프로그램 언어에 대해서만 라인 넘버를 표시하도록 변경하였습니다.

**1.1.2 업데이트**
* 모듈을 불러올 때 절대 경로를 사용하게 변경하였습니다.

**1.1.1 업데이트**
* 컨텐츠 내용이 화면 사이즈에 맞춰 변화하도록 변경하였습니다.
* 일정 길이 이상의 콘텐츠 목차에 대해 줄임표를 생성하도록 변경하였습니다.

**1.1.0 업데이트**
> 인터페이스 개선을 하였습니다.

* 우측 사이드바 목록에 타이틀 계층 구조를 따라 표시합니다.
* 코드 블럭의 가독성을 높이기 위해 스타일을 변화시켰습니다.
* 컨텐츠 폴더 구조를 독립적으로 변경하였습니다.

---
**1.0.0 업데이트**
> 프로젝트를 진행하며 공부한 내용이나 개발 과정등을 기록으로 남기기 위해 블로그를 개설합니다.  
당장 필요한 혹은 개발 소요가 크지 않은 기능을 우선적으로 추가하였습니다.

* 컨텐츠에 수식을 입력할 수 있습니다.
* 좌측 사이드바 목록이 오름차순으로 정렬되어 보여집니다.
* 좌측 사이드바 하위 목록을 가진 컨텐츠의 기본 상태가 접힌 상태가 됩니다.
