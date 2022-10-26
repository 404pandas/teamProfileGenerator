@@ -0,0 +1,19 @@
// Extends employee constructor + role specifics 
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github; 
    }

    // Github 
    getGithub () {
        return this.github;
    }

     // Role
    getRole () {
        return "Engineer"
    }
}