document.addEventListener('DOMContentLoaded', () => {

  console.log(getParentChildren(document.body))

  function nodesToArr() {
    let parents = [document.body]

  }

  function getParentChildren(node, final = []) {
    let children;
    let moreChildren = false;

    while (true) {
      children = Array.from(node.children)

      if (children.length) {

        final.push([node.tagName, children])
      } else {
        final.push([node.tagName, []])
      }
      moreChildren = children.some(element => element.childElementCount > 0 || )

      if (!moreChildren) break;
      for (let i = 0; i < children.length; i++) {
        getParentChildren(children[i], final)
      }
    }
    return final;
  }

})
