// The Singleton Pattern is just a way of creating a single object that is shared amongst a bunch of different resources throughout your application without having to recreate that object or losing the information inside of it.
// All of the state for that object, the variables, methods, all of those are shared among all these different other objects that are using it and there's just one source of information for this object and there's only ever a single type of this object created.
// This is why it is called a singleton, because your application will only and can only have one type of this object instantiate it at a time and all places that use this object, share that one single instance of the object.

// ============================================================================================

import logFirstImplementation from './firstUse.js';
import logSecondImplementation from './secondUse.js';

logFirstImplementation();
logSecondImplementation();