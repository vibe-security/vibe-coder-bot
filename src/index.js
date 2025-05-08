/**
 * VibeCoderBot - Probot App (JavaScript version)
 * Responds to new issues with a thank you comment.
 * Customize this file to add security/code review features!
 */

module.exports = (app) => {
  app.on("issues.opened", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for opening this issue!",
    });
    await context.octokit.issues.createComment(issueComment);
  });
  // Add PR, push, or security scan logic here
};
